<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', $page['props']['auth']['lang'] ?? substr(app()->getLocale(), 0, 2)) }}" class="{{ ($page['props']['adminAllSetting']['themeMode'] ?? $page['props']['companyAllSetting']['themeMode'] ?? 'light') === 'dark' ? 'dark' : 'light' }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title inertia>{{ config('app.name', 'AccountGo SaaS') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <script src="{{ asset('js/jquery.min.js') }}"></script>

        <!-- Scripts -->
        @routes
        <script>
            window.auth = @json($page['props']['auth'] ?? null);
            // Set theme immediately to prevent flash
            (function() {
                const themeMode = @json($page['props']['adminAllSetting']['themeMode'] ?? $page['props']['companyAllSetting']['themeMode'] ?? 'light');
                const root = document.documentElement;
                if (themeMode === 'dark') {
                    root.classList.add('dark');
                    root.classList.remove('light');
                } else {
                    root.classList.add('light');
                    root.classList.remove('dark');
                }
            })();
        </script>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased {{ ($page['props']['adminAllSetting']['themeMode'] ?? $page['props']['companyAllSetting']['themeMode'] ?? 'light') === 'dark' ? 'dark' : 'light' }}">
        @inertia
        <script src="https://helpdesk.startuplab.cc/livechat-loader.js"></script>
    </body>
</html>
