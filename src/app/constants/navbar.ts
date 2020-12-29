export interface NavbarItems{
    name: string;
    type: 'link' | 'dropdown' | 'button';
    path?: string;
    classnames?: string | string[];
    icon?: {
        position?: 'left' | 'right';
        name?: string;
        html?: string;
    }
    submenu?: NavbarItems[];
}

export const navbarCenter:NavbarItems[] = [
    {name: '¿QUÉ ES EL CI?', type: 'button' },
    {name: '¿POR QUÉ INVERTIR EN RE?', type: 'button' },
    {name: 'INVERSIONES', type: 'button' },
    {name: '¿CÓMO FUNCIONA?', type: 'button' },
    {name: 'F.A.Q', type: 'button' },
];

export const navbarRight:NavbarItems[] = [
    {name: 'Iniciar Sesión', type: 'button', icon: { position: 'right', html: `<span><icon-user></icon-user></span>` }, classnames:"text"},
    {name: 'Abrir Cuenta', type: 'button', classnames: 'outline'}
]