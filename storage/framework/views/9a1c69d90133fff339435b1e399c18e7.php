<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', $page['props']['auth']['lang'] ?? substr(app()->getLocale(), 0, 2))); ?>" class="<?php echo e(($page['props']['adminAllSetting']['themeMode'] ?? $page['props']['companyAllSetting']['themeMode'] ?? 'light') === 'dark' ? 'dark' : 'light'); ?>">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

        <title inertia><?php echo e(config('app.name', 'AccountGo SaaS')); ?></title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <script src="<?php echo e(asset('js/jquery.min.js')); ?>"></script>

        <!-- Scripts -->
        <?php echo app('Tighten\Ziggy\BladeRouteGenerator')->generate(); ?>
        <script>
            window.auth = <?php echo json_encode($page['props']['auth'] ?? null, 15, 512) ?>;
            // Set theme immediately to prevent flash
            (function() {
                const themeMode = <?php echo json_encode($page['props']['adminAllSetting']['themeMode'] ?? $page['props']['companyAllSetting']['themeMode'] ?? 'light', 15, 512) ?>;
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
        <?php echo app('Illuminate\Foundation\Vite')->reactRefresh(); ?>
        <?php echo app('Illuminate\Foundation\Vite')(['resources/css/app.css', 'resources/js/app.tsx']); ?>
        <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->head; } ?>
    </head>
    <body class="font-sans antialiased <?php echo e(($page['props']['adminAllSetting']['themeMode'] ?? $page['props']['companyAllSetting']['themeMode'] ?? 'light') === 'dark' ? 'dark' : 'light'); ?>">
        <?php if (!isset($__inertiaSsrDispatched)) { $__inertiaSsrDispatched = true; $__inertiaSsrResponse = app(\Inertia\Ssr\Gateway::class)->dispatch($page); }  if ($__inertiaSsrResponse) { echo $__inertiaSsrResponse->body; } else { ?><div id="app" data-page="<?php echo e(json_encode($page)); ?>"></div><?php } ?>
        
    </body>
</html>
<?php /**PATH /home/kyro/public_html/resources/views/app.blade.php ENDPATH**/ ?>