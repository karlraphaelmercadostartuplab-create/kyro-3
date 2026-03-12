import { PropsWithChildren, ReactNode, Fragment } from "react";
import {AppSidebar} from "@/components/app-sidebar";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {Separator} from "@/components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { NavUser } from "@/components/nav-user";
import { usePage, Head, Link, router } from "@inertiajs/react";
import { PageProps } from "@/types";
import { BrandProvider, useBrand } from "@/contexts/brand-context";
import CookieConsent from "@/components/cookie-consent";
import { useFavicon } from "@/hooks/use-favicon";
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { UserX } from "lucide-react";
import { useFlashMessages } from "@/hooks/useFlashMessages";

function AuthenticatedLayoutContent({
    header,
    children,
    breadcrumbs,
    pageTitle,
    pageActions
}: PropsWithChildren<{
    header?: ReactNode;
    breadcrumbs?: Array<{label: string, url?: string}>;
    pageTitle?: string;
    pageActions?: ReactNode;
    className?: string;
}>) {
    const { t } = useTranslation();
    const { auth, companyAllSetting, adminAllSetting } = usePage<PageProps>().props as any;
    const { settings } = useBrand();
    useFavicon();
    useFlashMessages();

    return (
        <>
        <Head>
            {companyAllSetting?.metaKeywords && (
                <meta name="keywords" content={companyAllSetting.metaKeywords} />
            )}
            {companyAllSetting?.metaDescription && (
                <meta name="description" content={companyAllSetting.metaDescription} />
            )}
            {companyAllSetting?.metaImage && (
                <meta property="og:image" content={companyAllSetting.metaImage} />
            )}
        </Head>
        <div
            className={settings.layoutDirection === 'rtl' ? 'rtl' : 'ltr'}
            data-theme={settings.themeMode}
            dir={settings.layoutDirection === 'rtl' ? 'rtl' : 'ltr'}
            style={{ direction: settings.layoutDirection === 'rtl' ? 'rtl' : 'ltr' }}
        >
        <SidebarProvider defaultOpen={true}>
            <AppSidebar />

            <SidebarInset className="overflow-visible"
                style={{ direction: settings.layoutDirection === 'rtl' ? 'rtl' : 'ltr' }}
                dir={settings.layoutDirection === 'rtl' ? 'rtl' : 'ltr'}
            >
                <header className="bg-background mb-2 flex min-h-12 shrink-0 flex-wrap items-center justify-between gap-3 border-b px-4 py-2">
                    <div className={`flex min-w-0 items-center gap-2 ${ settings.layoutDirection === "rtl" ? "order-2 flex-row-reverse" : "order-1" }`}>
                        <SidebarTrigger className={`-ml-1 ${ settings.layoutDirection === "rtl" ? "order-3" : "order-1" }`} />

                        <Separator orientation="vertical" className="order-2 mr-2 hidden h-4 sm:block" />

                        <Breadcrumb className={`hidden min-w-0 sm:block ${ settings.layoutDirection === "rtl" ? "order-1" : "order-3" }`}>
                            <BreadcrumbList className={`flex ${ settings.layoutDirection === "rtl" ? "justify-end" : "justify-start" }`}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href={route("dashboard")}>{t('Dashboard')}</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                {breadcrumbs?.map((crumb, index) => (
                                    <Fragment key={index}>
                                        <BreadcrumbSeparator className={settings.layoutDirection === 'rtl' ? 'rotate-180' : ''} />
                                        <BreadcrumbItem>
                                            {crumb.url ? (
                                                <BreadcrumbLink asChild>
                                                    <Link href={crumb.url}>{crumb.label}</Link>
                                                </BreadcrumbLink>
                                            ) : (
                                                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                                            )}
                                        </BreadcrumbItem>
                                    </Fragment>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div
                        className={`flex shrink-0 items-center gap-2 ${
                        settings.layoutDirection === "rtl" ? "order-1 flex-row-reverse" : "order-2"
                        }`}
                    >
                        {auth.impersonating && (
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => router.post(route('users.leave-impersonation'))}
                                className="border-orange-600 text-orange-600 hover:bg-orange-50"
                            >
                                <UserX className="mr-2 h-4 w-4" />
                                {t('Leave Login As User')}
                            </Button>
                        )}
                        <NavUser user={auth.user} inHeader={true} />
                    </div>
                </header>

                <main className="h-full p-4 md:pt-0">
                    {pageTitle && (
                        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center" dir={settings.layoutDirection}>
                            <h1 className="flex-1 break-words text-xl font-semibold">{pageTitle}</h1>
                            <div className="w-full shrink-0 sm:w-auto">{pageActions}</div>
                        </div>
                    )}
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
        <CookieConsent settings={adminAllSetting || {}} />
        </div>
        </>
    );
}

export default function AuthenticatedLayout(props: PropsWithChildren<{
    header?: ReactNode;
    breadcrumbs?: Array<{label: string, url?: string}>;
    pageTitle?: string;
    pageActions?: ReactNode;
    className?: string;
}>) {
    return (
        <BrandProvider>
            <AuthenticatedLayoutContent {...props} />
        </BrandProvider>
    );
}
