import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarEn: NavbarConfig = [
    {
        text: 'Get Started',
        link: '/get-started/',
    },
    {
        text: 'Powergrid Table',
        link: '/table/',
        children: [
            '/table/features-setup.md',
            '/table/datasource.md',
            '/table/add-columns.md',
            '/table/include-columns.md',
            '/table/column-filters.md',
            '/table/column-summary.md',
            '/table/cell-actions-buttons.md',
            '/table/row-actions-buttons.md',
            '/table/bulk-actions.md',
            '/table/action-rules.md',
            '/table/update-data.md',
            '/table/queue-export.md',
            '/table/component-settings.md',
            '/table/detail-row.md',
            '/table/custom-theme.md',
        ],
    },
    {
        text: `4.x (latest)`,
        children: [
            {
                text: `3.x`,
                link: 'https://v3.livewire-powergrid.com',
            },
            {
                text: `2.x`,
                link: 'https://v2.livewire-powergrid.com',
            },
        ],
    },
]
