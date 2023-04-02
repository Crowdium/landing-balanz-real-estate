import { ITimeline } from '../components/timeline/timeline.component';

export const timelineData: ITimeline[] = [
    {
        step: `<icon-doughnut></icon-doughnut>`,
        title: 'Participación:',
        content:
            'Adquirís un porcentaje de participación en un fideicomiso ordinario privado que es dueño del activo inmobiliario.',
    },
    {
        step: `<icon-bars></icon-bars>`,
        title: 'Renta y Revalorización:',
        content:
            'Tu capital estará invertido en una propiedad que se revalorizará con el tiempo y dependiendo del tipo de proyecto, se cobrarán los retornos.',
    },
    {
        step: `<icon-money></icon-money>`,
        title: 'Retornos:',
        content:
            'Al finalizar el período estimado del proyecto, los activos inmobiliarios se colocarán a la venta y se distribuirán los retornos generados por éstas.',
    },
];
