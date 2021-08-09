import { ICollapseMenuData } from '../components/collapse-menu/collapse-menu.component';
import { IGalleryData } from '../components/gallery/gallery.component';
import { ITimeline } from '../components/timeline/timeline.component';
import { IResume } from '../containers/resume-investment/resume-investment.component';

export const scrollSpyMenu = [
    {id: "#resume", content: "Resumen"},
    {id: "#description", content: "Descripción del Proyecto"},
    {id: "#timeline", content: "Línea de Tiempo"},
    {id: "#responsible", content: "Responsables"},
    {id: "#faq", content: "Preguntas Frecuentes"},
];

export const galleryData:IGalleryData[] = [
    {path: "../../assets/gallery/vista-belgrano-1.jpg", id:"1", alt:"Vista Belgrano 1"},
    {path: "../../assets/gallery/vista-belgrano-2.jpg", id:"2", alt:"Vista Belgrano 2"},
    {path: "../../assets/gallery/vista-belgrano-3.jpg", id:"3", alt:"Vista Belgrano 3"},
    {path: "../../assets/gallery/vista-belgrano-4.jpg", id:"4", alt:"Vista Belgrano 4"},
    {path: "../../assets/gallery/vista-belgrano-5.jpg", id:"5", alt:"Vista Belgrano 5"},
    {path: "../../assets/gallery/vista-belgrano-6.jpg", id:"6", alt:"Vista Belgrano 6"},
];

export const resumeList:IResume[] = [
    {icon: 'dollar-circle', title: 'MONEDA DEL FONDO', value: 'DÓLAR'},
    {icon: 'signal', title: 'RENTABILIDAD ESTIMADA TOTAL', value: '25~35%'},
    {icon: 'fund', title: 'TIR ESTIMADA', value: '10,04%'},
    {icon: 'clock-circle', title: 'DURACIÓN ESTIMADA', value: '36 meses'},
    {icon: 'pie-chart', title: 'INVERSIÓN MÍNIMA', value: 'USD 1.000'},
    {icon: 'project', title: 'OPERADOR', value: 'Crowdium S.R.L'},
    {icon: 'bank', title: 'FIDUCIARIA PÚBLICA ADMINISTRADORA', value: 'Compañía Fiduciaria Americana S.A.'},
    {icon: 'profile', title: 'VEHÍCULO LEGAL', value: 'Fideicomiso privado sin autorización de oferta pública por CNV'},
];


export const descriptionData:string = `
    <p>
        <strong>Vista Belgrano</strong> es un complejo de departamentos próximo a estrenarse, ubicado en el corazón gastronómico y comercial de Belgrano a metros de Av. Cabildo y Juramento. Al ser una 
        torre a estrenar premium, con un exclusivo diseño arquitectónico y con una oferta de amenities de primera calidad en Buenos Aires, Vista Belgrano se convierte en un producto demandado 
        tanto para alquilar como para comprar.
    </p>
    <blockquote class="success">
        A través del modelo del <b>crowdfunding inmobiliario</b>, el fideicomiso privado adquirirá unidades próximas a estrenar con un importante descuento con respecto al precio de lista 
        que serán <b>alquiladas generando una renta para el inversor</b> y luego se venderán con un incremento sustancial en el precio, estimando generar así una <strong>rentabilidad 
        total entre el 25 y 35% en dólares en 36 meses.</strong>
    </blockquote>
    <p>
        La torre cuenta con 85 unidades distribuidas en 15 plantas, con los pisos 16 y 17 reservados para los amenities con una piscina de primera calidad y dos subsuelos reservados 
        para las 55 cocheras. <strong>Las unidades que se adquirirán son de uno a cuatro ambientes de entre 41 a 130m² permitiendo generar una oferta diversificada de departamentos para los 
        distintos segmentos de mercado.</strong>
    </p>
    <p class="subtitle">
        ATRIBUTOS DE LA INVERSIÓN
    </p>
    <ul>
        <li>
            <p>
                <strong>Oportunidad única de compra:</strong> importante descuento sobre el precio de lista del desarrollador.
            </p>
        </li>
        <li>
            <p>
                <strong>Renta:</strong> una vez adquiridas las unidades, las mismas se pondrán en alquiler generando una renta para el inversor que se distribuirá trimestralmente.
            </p>
        </li>
        <li>
            <p>
                <strong>Compra de contado:</strong> genera un ahorro del ajuste por CAC y/o inflación respecto de otras alternativas.
            </p>
        </li>
        <li>
            <p>
                <strong>Locales comerciales:</strong> el complejo contará con 1 local comercial en PB que revalorizará la zona.
            </p>
        </li>
        <li>
            <p>
                <strong>Proyecciones de venta conservadoras a 36 meses.</strong>
            </p>
        </li>
        <li>
            <p>
                <strong>Obra próxima a terminarse:</strong> : con posesión de las unidades en Diciembre 2021
            </p>
        </li>
        <li>
            <p>
                Selección de unidades de 41 a 130 m² facilitan la posterior venta y defienden mejor el valor por m².
            </p>
        </li>
        <li>
            <p>
                <strong>Ubicación excepcional:</strong> ubicada a metros de Av. Cabildo y Juramento, en pleno corazón gastronómico y comercial de Belgrano.
            </p>
        </li>
        <li>
            <p>
                <strong>Amenities de primera calidad:</strong> la torre cuenta con un área de coworking, sector de laundry, más de 100 m² de SUM, sector de juegos para niños, gimnasio con 
                equipamiento aeróbico, seguridad las 24hs, dos subsuelos de cocheras además de cocheras de cortesía en planta baja y una piscina roof-top casi semi olímpica con una vista 
                excepcional del río y de la ciudad de Buenos Aires.
            </p>
        </li>
    </ul>
    <p class="subtitle">
        ESTRATEGIA DE SALIDA
    </p>
    <p>
        Una vez adquiridos los departamentos, <strong>Crowdium</strong> y su equipo de especialistas analizará el mercado periódicamente y definirá el mejor momento y precio al que se alquilarán 
        y venderán las unidades, con el objetivo de maximizar el retorno de los inversores en un horizonte temporal de 36 meses.
    </p>
    <p>
        La <strong>Fiduciaria CFA</strong> se encargará de administrar los fondos remanentes depositados en el fideicomiso para afrontar los gastos de mantenimiento e impuestos del fideicomiso.
    </p>
    <p>
        Se espera que el precio de venta aumente sustancialmente debido a que las unidades se adquieren con un descuento por ser una compra mayorista de unidades. Además, 
        <strong>Vista Belgrano</strong> es una torre con una calidad constructiva de primer nivel que generará un diferencial importante respecto a cualquier otro desarrollo de la zona y 
        logrará atraer la atención de compradores finales, lo que <strong>agilizará la venta y mantendrá los valores en los máximos del mercado.</strong>
    </p>
`;

export const timelineProjectData: ITimeline[] = [
    {
        step: `<icon-acquisition></icon-acquisition>`, 
        title: "Adquisición", 
        subtitle: "SEPTIEMBRE 2021", 
        content: "Una vez finalizada la etapa de fondeo, la fiduciaria ordenará la compra de las unidades con importante descuento respecto de similares departamentos en la zona."
    },
    {
        step: `<icon-sale></icon-sale>`, 
        title: "Finalización de Obra y Renta",  
        subtitle: "DICIEMBRE 2021 - FEBRERO 2023", 
        content: "Una vez finalizada la obra y con la posesión de las unidades, las mismas se pondrán en alquiler y la renta se irá distribuyendo entre los inversores de forma trimestral."
    },
    {
        step: `<icon-tools></icon-tools>`, 
        title: "Finalización de la Obra + Período de Venta",
        subtitle: "MARZO 2024 - SEPTIEMBRE 2024", 
        content: "Luego de haber considerado un plazo de 30 meses, se pondrán en venta las unidades a partir de marzo del 2024 buscando lograr la mayor rentabilidad para el inversor."
    },
];

export const responsibleData = [
    {
        image: "../../assets/responsible/boston.jpeg",
        title: "Boston Andes Capital",
        subtitle: "DESARROLLO",
        content: "BAC es una firma de inversiones en real estate, que organiza proyectos de capital privado y se especializa en la estructuración, desarrollo, gerenciamiento de activos y consultoría. BAC tiene su sede central en Boston, MA y actividades en varias ciudades de Estados Unidos y América Latina"
    },
    {
        image: "../../assets/responsible/estudiogsa.jpeg",
        title: "Estudio GS",
        subtitle: "DIRECCIÓN",
        content: "Estudio con más de 30 años dedicado a la organización de proyectos de construcción (Gerenciamiento, Dirección de Obra, Programación y seguimiento por Camino Crítico)."
    },
    {
        image: "../../assets/responsible/2ps.jpeg",
        title: "2PS",
        subtitle: "PROYECTO",
        content: "Equipo multidisciplinario integrado por arquitectos proyectistas, documentadores de obra, interioristas, diseñadores, directores de obra e ingenieros abocados a cada una de las especialidades."
    },
    {
        image: "../../assets/responsible/edfran.jpeg",
        title: "EDFAN",
        subtitle: "CONSTRUCTURA",
        content: "Constructora con más de 30 años en el mercado especializada en estructuras de hormigón, albañilería, obras llave en mano e ingeniería civil para grandes desarrollos de infraestructura. Son una de las constructoras mas importantes del país con más de 125.000m2 construidos e importantes obras realizadas como el edificio Samsumg, el banco de Tokio de la ciudad de Buenos Aires y la Universidad de Belgrano."
    }
];

export const faqHUB: ICollapseMenuData[] = [
    {
        title: "¿Qué es el Crowdfunding?",
        content: `
            <p>
                Crowdfunding, del inglés Crowd (masa o multitud) y Funding (financiamiento o fondeo). La financiación colectiva, es la cooperación conjunta llevada a 
                cabo por personas que forman una red para conseguir dinero u otros recursos.
            </p>
        `
    },
    {
        title: "¿Tiene algún riesgo el Crowdfunding?",
        content: `
            <p>
                No, el crowdfunding en sí significa simplemente “financiamiento colectivo”. El riesgo está asociado únicamente al activo subyacente. En este caso, 
                el crowdfunding está aplicado al mercado inmobiliario que históricamente es uno de los mercado mas seguros y rentables del mundo.
            </p>
        `
    },
    {
        title: "¿Qué es el Crowdfunding Inmobiliario?",
        content: `
            <p>
                El Crowdfunding aplicado al Mercado Inmobiliario le brinda a los clientes la posibilidad de participar en grandes proyectos con tickets de inversión 
                reducidos. Es decir, elimina la barrera de acceso que tenían los medianos y pequeños inversores para con los grandes proyectos inmobiliarios de primer 
                nivel.
            </p>
            <p>
                Por ejemplo, un proyecto inmobiliario de USD 10.000.000 puede ser financiado por 1.000 participantes que invierten USD10.000 cada uno.
            </p>
        `
    },
    {
        title: "¿Cuál es la rentabilidad estimada del proyecto?",
        content: `
            <p>
                La rentabilidad total estimada que propone este proyecto (ROI) es entre el 25 y 35% en dólares en un plazo aproximado de 36 meses.
            </p>
        `
    },
    {
        title: "¿Cuál es la TIR estimada del proyecto?",
        content: `
            <p>
                La tasa interna de retorno estimada para este proyecto es del 10,4%.
            </p>
        `
    },
    {
        title: "¿Por qué el calculo de la rentabilidad, TIR y plazo son estimados?",
        content: `
            <p>
                Hablamos de estimaciones en el calculo de la rentabilidades, TIR y plazo porque las unidades pueden venderse escalonadamente antes o después del plazo 
                estimado de inversión y los valores de venta pueden fluctuar de acuerdo con las condiciones de venta del mercado.
            </p>
        `
    },
    {
        title: "¿Para qué se utilizará mi inversión?",
        content: `
            <p>
                El dinero se utilizará para la compra mayorista de departamentos en la semitorre Vista Belgrano que se encuentra actualmente en etapa de construcción y todos 
                los gastos e impuestos, adquisición y mantenimiento del proyecto durante el plazo estimado de inversión. Posteriormente, estas unidades serán vendidas y el 
                resultado será distribuido entre todos los inversores.
            </p>
        `
    },
    {
        title: "¿Cómo se instrumentará la compra de las unidades?",
        content: `
            <p>
                Una vez reunido el capital, el Fideicomiso realizará la compraventa de los departamentos a precio cerrado y de contado que se instrumentará a través de 
                una adhesión al fideicomiso de obra quien lleva acabo el desarrollo del inmueble.
            </p>
        `
    },
    {
        title: "¿Qué seguridad tiene mi inversión sobre el proyecto?",
        content: `
            <p>
                En primer lugar, la seguridad de los proyectos inmobiliarios en construcción esta dado por la trayectoria del desarrollador y la constructora. En este caso, Boston Andes y 
                Edfan son unos de los desarrolladores y constructora más importante de la Argentina con el 100% de obras terminadas teniendo entre sus proyectos obras como el edificio Samsumg, 
                el banco de Tokio de la ciudad de Buenos Aires y la Universidad de Belgrano.
            </p>
            <p>
                En segundo lugar, <strong>Vista Belgrano</strong> se encuentra príoximo a entregar las unidades terminadas en diciembre del 2021 reduciendo al mínimo el principal riesgo de los desarrollos 
                inmobiliarios que son los tiempos de obra.
            </p>
        `
    },
    {
        title: "¿Cuándo recibo los retornos de mi inversión?",
        content: `
            <p>
                Una vez terminada la obra y entregados los departamentos, los mismos serán alquilados generando una renta que se distribuirá trimestralmente entre los inversores. 
                Al mismo tiempo, se analizará periódicamente el mercado a fin de encontrar el mejor momento de venta de las unidades. A medida se vayan vendiendo los departamentos, 
                se distribuirá el resultado de cada venta.
            </p>
        `
    },
    {
        title: "¿Cuánto es el monto mínimo de inversión?",
        content: `
            <p>
                El monto mínimo de inversión es de USD 1.000.
            </p>
        `
    },
    {
        title: "¿Por qué medios puedo invertir?",
        content: `
            <p>
                Transferencia bancaria en pesos o dólares o mediante títulos directamente desde tu comitente.
            </p>
        `
    },
    {
        title: "¿Qué obtengo con mi inversión?",
        content: `
            <p>
                Cada inversor recibirá un porcentaje de participación en el fideicomiso equivalente a una cantidad de m2 y dinero remanente en la cuenta bancaria del 
                fidecomiso para afrontar los gastos de mantenimiento del proyecto durante todo el plazo estimado de inversión. Este porcentaje corresponderá al cociente 
                entre la inversión sobre el capital fideicomitido total.
            </p>
        `
    },
    {
        title: "¿Cómo me aseguran que mi dinero se usará en lo que estoy invirtiendo?",
        content: `
            <p>
                Tu inversión estará reguardada en la cuenta bancaria del fideicomiso en dólares hasta completar el cupo necesario para la compra mayorista de los 
                departamentos y será administrado por una fiduciaria pública registrada en la Comisión Nacional de Valores (CNV). Crowdium en ningún momento tiene acceso 
                al capital invertido ya que el dinero es transferido directamente a la cuenta del fideicomiso.
            </p>
        `
    },
    {
        title: "¿Cuáles son los factores de riesgo?",
        content: `
            <p>
                El riesgo de participar en este proyecto es el de participar en la compra de departamentos próximos a estrenasrse. Adicionalmente, para reducir los riesgos inherentes 
                del mercado inmobiliario, se han realizado las debidas diligencias de todos los involucrados en el desarrollo del proyecto <strong>Vista Belgrano.</strong>
            </p>
        `
    },
    {
        title: "¿Quién administra el capital?",
        content: `
            <p>
                El capital es administrado por CFA, Compañía Fiduciaria Americana, una fiduciaria pública registrada en la Comisión Nacional de Valores.
            </p>
        `
    },
    {
        title: "¿La inversión es en pesos o en dólares?",
        content: `
            <p>
                La inversión es en dólares.
            </p>
        `
    },
    {
        title: "¿En qué moneda puedo invertir?",
        content: `
            <p>
                La forma de suscripción al proyecto podrá ser mediante transferencia bancaria en pesos o dólares a la cuenta del fideicomiso u  a través de títulos 
                operando directamente a través de tu cuenta comitente en Balanz.
            </p>
        `
    },
    {
        title: "¿Tengo gastos adicionales o de mantenimiento durante la vida del proyecto?",
        content: `
            <p>
                La inversión tiene contemplados todos los gastos de adquisición, impuestos y mantenimiento del proyecto durante el plazo estimado de inversión.
            </p>
        `
    },
    {
        title: "¿Cómo me informo sobre el avance de mis inversiones?",
        content: `
            <p>
                Se mantendrá informado al inversor de forma periódica a través de notificaciones y/o correo electrónico asociado a su cuenta en Balanz.
            </p>
        `
    },
    {
        title: "¿Qué ocurre si no se recauda el 100% del capital requerido para un proyecto en el tiempo preestablecido?",
        content: `
            <p>
                Si no se recauda el 100% del capital requerido, se podrá realizar una compra parcial de las unidades. En caso de recaudar menos del 50% del capital 
                requerido, el dinero será devuelto a los usuarios en su totalidad descontando el impuesto a los Débitos y Créditos bancarios de acuerdo con lo 
                establecido en la Ley 25.413.
            </p>
        `
    },
]
