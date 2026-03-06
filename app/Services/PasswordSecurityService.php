<?php

namespace App\Services;

use App\Models\PasswordHistory;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class PasswordSecurityService
{
    private const PASSWORD_HISTORY_LIMIT = 5;

    public static function isPasswordReused(User $user, string $plainPassword): bool
    {
        if (!empty($user->password) && Hash::check($plainPassword, $user->password)) {
            return true;
        }

        return PasswordHistory::query()
            ->where('user_id', $user->id)
            ->latest('id')
            ->limit(self::PASSWORD_HISTORY_LIMIT)
            ->get(['password'])
            ->contains(fn ($history) => Hash::check($plainPassword, $history->password));
    }

    public static function pushCurrentPasswordToHistory(User $user): void
    {
        if (empty($user->password)) {
            return;
        }

        PasswordHistory::create([
            'user_id' => $user->id,
            'password' => $user->password,
        ]);

        $passwordHistoryIdsToKeep = PasswordHistory::query()
            ->where('user_id', $user->id)
            ->latest('id')
            ->limit(self::PASSWORD_HISTORY_LIMIT)
            ->pluck('id')
            ->toArray();

        if (empty($passwordHistoryIdsToKeep)) {
            return;
        }

        PasswordHistory::query()
            ->where('user_id', $user->id)
            ->whereNotIn('id', $passwordHistoryIdsToKeep)
            ->delete();
    }
}
