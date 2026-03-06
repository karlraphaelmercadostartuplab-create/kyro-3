<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\PasswordSecurityService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class PasswordController extends Controller
{
    /**
     * Update the user's password.
     */
    public function update(Request $request): RedirectResponse
    {
        if (Auth::user()->can('change-password-profile')) {
            $validated = $request->validate([
                'current_password' => ['required', 'current_password'],
                'password' => ['required', Password::defaults(), 'confirmed'],
            ]);

            $user = $request->user();
            if (PasswordSecurityService::isPasswordReused($user, $validated['password'])) {
                return back()->withErrors([
                    'password' => __('You cannot reuse your current or recent passwords. Please choose a new password.'),
                ]);
            }

            PasswordSecurityService::pushCurrentPasswordToHistory($user);

            $user->update([
                'password' => Hash::make($validated['password']),
            ]);

            return back()->with('success', __('Password updated successfully.'));
        }

        return back()->with('error', __('Permission denied'));
    }
}
