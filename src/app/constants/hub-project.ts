import { IGalleryData } from '../components/gallery/gallery.component';
import { ITimeline } from '../components/timeline/timeline.component';
import { IResume } from '../containers/resume-investment/resume-investment.component';

export const urlVideo:string = "https://www.youtube.com/embed/PVKcrQv_fEU";

export const scrollSpyMenu = [
    {id: "#resume", content: "Resumen"},
    {id: "#description", content: "Descripción del Proyecto"},
    {id: "#timeline", content: "Línea de Tiempo"},
    {id: "#video", content: "Video"},
    {id: "#responsible", content: "Responsables"},
    {id: "#faq", content: "Preguntas Frecuentes"},
];

export const galleryData:IGalleryData[] = [
    {path: "../../assets/gallery/hub-cabildo-1.jpg", id:"1", alt:"HUB Cabildo 1"},
    {path: "../../assets/gallery/hub-cabildo-2.jpg", id:"2", alt:"HUB Cabildo 2"},
    {path: "../../assets/gallery/hub-cabildo-3.jpg", id:"3", alt:"HUB Cabildo 3"},
    {path: "../../assets/gallery/hub-cabildo-4.jpg", id:"4", alt:"HUB Cabildo 4"},
    {path: "../../assets/gallery/hub-cabildo-5.jpg", id:"5", alt:"HUB Cabildo 5"},
    {path: "../../assets/gallery/hub-cabildo-6.jpg", id:"6", alt:"HUB Cabildo 6"},
    {path: "../../assets/gallery/hub-cabildo-7.jpg", id:"7", alt:"HUB Cabildo 7"}
];

export const resumeList:IResume[] = [
    {icon: 'dollar-circle', title: 'MONEDA DEL FONDO', value: 'DOLAR'},
    {icon: 'signal', title: 'RENTABILIDAD ESTIMADA TOTAL', value: '25~35%'},
    {icon: 'fund', title: 'TIR ESTIMADA', value: '10,4%'},
    {icon: 'clock-circle', title: 'DURACIÓN ESTIMADA', value: '36 Meses'},
    {icon: 'pie-chart', title: 'INVERSIÓN MÍNIMA', value: 'USD 1.000'},
    {icon: 'dollar-circle', title: "OBJETIVO DE FONDEO", value: "USD 6.123.000"},
    {icon: 'project', title: 'OPERADOR', value: 'Crowdium S.R.L'},
    {icon: 'profile', title: 'VEHICULO LEGAL', value: 'Fideicomiso Ordinario De Administración'},
    {icon: 'bank', title: 'FIDUCIARIA PÚBLICA ADMINISTRADORA', value: 'Compañía Fiduciaria Americana S.A'},
];

export const descriptionData:string = `
    <p>
        HUB Cabildo es un desarrollo inmobiliario residencial premium, ubicado en el barrio de Núñez sobre la Av. Cabildo frente a la Plaza Balcarce y el Blvd. Comodoro Rivadavia. 
        Al ser uno de los desarrollos de mayor calidad constructiva de la zona, con una ubicación, diseño y arquitectura exclusiva, su venta, una vez terminada la obra, 
        permitirá ofrecer un valor por m² más elevado que el promedio y así, generar una alta revalorización para sus inversores.
    </p>
    <blockquote class="success">
        A través del modelo del crowfunding inmobiliario, se propone adquirir unidades de pozo a precio fijo con un <strong>25% de descuento</strong> sobre el precio de lista del 
        desarrollador por la compra mayorista y de contado. <b>HUB Cabildo</b> es uno de los desarrollos más destacados de la zona, donde la revalorización desde el pozo a 
        terminado supera el 10% anual, estimando generar así una <strong>rentabilidad entre el 25 y 35% en dólares en 36 meses.</strong>
    </blockquote>
    <p>
        La torre cuenta con 186 unidades distribuidas en 14 pisos con full amenities, sobre un terreno de más de 1.000mts² de superficie. Al estar ubicado en una manzana 
        triangular con 130mts lineales de fachada, todas las unidades son al frente con vista verde a la plaza Balcarce o la árboleda de los boulevards Rivadavía y García del 
        Río. <strong>Las unidades que se adquirirán son departamentos de 1 a 4 ambientes de entre 35 y 100mts².</strong>
    </p>
    <p>
        El desarrollo es llevado a cabo por destacadas empresas del sector inmobiliario argentino, marcando la seriedad y calidad con la que se construirán y entregarán todas 
        las unidades de HUB Cabildo.
    </p>
    <p class="subtitle">
        ATRIBUTOS DE LA INVERSIÓN
    </p>
    <ul>
        <li>
            <p>
                <strong>Oportunidad única de compra:</strong> 25% por debajo del precio del lista del desarrollador.
            </p>
        </li>
        <li>
            <p>
                <strong>Compra de contado:</strong> genera un ahorro del ajuste por CAC y/o inflación respecto de otras alternativas.
            </p>
        </li>
        <li>
            <p>
                <strong>Fuerte revalorizacion:</strong> por el perfil de cliente final y escasez de este tipo de producto en la zona.
            </p>
        </li>
        <li>
            <p>
                <strong>Proyecciones de venta conservadoras a 36 meses.</strong>
            </p>
        </li>
        <li>
            <p>
                <strong>Departamentos con vista al frente:</strong> manzana triangular con 130mts de fachada.
            </p>
        </li>
        <li>
            <p>
                Selección de unidades de 35 a 100 mts² promedio facilitan la posterior venta y defienden mejor el valor por m².
            </p>
        </li>
        <li>
            <p>
                <strong>Ubicación excepcional:</strong> combina los beneficios de vivir en un entorno de calma y naturaleza, con la rápida conexión a través de las 
                principales avenidas y accesos de la ciudad.
            </p>
        </li>
        <li>
            <p>
                <strong>Desarrollo único:</strong> el edificio estará rodeado de espacios verdes y en su interior contará con más de 2.000mts² de espacios comunes y amenities.
            </p>
        </li>
        <li>
            <p>
                <strong>Responsables de primer nivel:</strong> los desarrolladores y constructores responsables del proyecto tienen más de 30 años en el mercado y llevan más de 
                80.000mts² construidos.
            </p>
        </li>
    </ul>
    <p class="subtitle">
        ESTRATEGIA DE SALIDA
    </p>
    <p>
        Una vez adquiridos los departamentos, <strong>Crowdium</strong> y su equipo de especialistas analizará el mercado periódicamente y definirá el mejor momento y precio al que se 
        venderán las unidades, con el objetivo de maximizar el retorno de los inversores en un horizonte temporal de entre 12 y 36 meses..
    </p>
    <p>
        La <strong>Fiduciaria CFA</strong> se encargará de administrar el capital de aforo durante la vida del Fideicomiso y la posterior venta de los departamentos..
    </p>
    <p>
        Se espera que el precio de venta aumente de forma considerable debido a que las unidades se adquieren en una etapa temprana del desarrollo del edificio 
        (final de la demolición, inicio de obra estructural) además de estar ubicado en una de las zonas con mayor crecimiento y revalorización de los últimos años..
    </p>
    <p>
        Sumado a ello, <strong>HUB Cabildo</strong> será una torre premium de gran escala y con una calidad constructiva de primer nivel que generará un diferencial 
        importante respecto a cualquier otro desarrollo de la zona y logrará atraer la atención tanto de inversores como compradores finales lo que <strong> agilizará la venta 
        y mantendrá los valores en los máximos del mercado.. </strong>
    </p>
`;

export const timelineProjectData: ITimeline[] = [
    {
        step: `<icon-acquisition></icon-acquisition>`, 
        title: "Adquisición", 
        subtitle: "MARZO 2021", 
        content: "Una vez finalizada la etapa de fondeo, la fiduciaria ordenará la compra de las unidades con un 25% de descuento respecto de similares departamentos en el edificio."
    },
    {
        step: `<icon-sale></icon-sale>`, 
        title: "Etapa de Obra",  
        subtitle: "ABRIL 2021 - SEPTIEMBRE 2023", 
        content: "La contrucción del edificio que comenzó en septiembre del 2020 continuará con su etapa de obra durante los próximos 30 a 36 meses aproximadamente. Se analizará periódicamente el mercado a fin de encontrar el mejor momento de venta durante la obra, entendiendo que a su finalización será uno de los mejores momentos para vender."
    },
    {
        step: `<icon-tools></icon-tools>`, 
        title: "Finalización de la Obra + Venta",
        subtitle: "OCTUBRE 2023 - MARZO 2024", 
        content: "Se estima que la obra termine entre octubre y marzo del 2024 momento en el cual estimamos que las unidades habrán alcanzado el mayor valor de venta del mt²."
    },
];

export const responsibleData = [
    {
        image: "../../assets/responsible/tiscornia.jpg",
        title: "Tiscornia",
        subtitle: "DESARROLLADOR",
        content: "Estudio que cuenta con más de 20 años de trayectoria y más de 80.000mts² de obra construidos de edificios en las mejores zonas de la ciudad de Buenos Aires."
    },
    {
        image: "../../assets/responsible/bma.jpg",
        title: "Bodas Miani Anger",
        subtitle: "BMA ESTUDIO DE ARQUITECTURA",
        content: "Se dedica a prestar servicios integrales respecto a proyectos y desarrollos inmobiliarios en general y se especializa en obras comerciales como por ejemplo la ampliación del Aeropuerto Jorge Newbery, el Solar de la Abadía y diversos cines para la cadena Village. También realizaron el Tortugas Open Mall y Madero Walk un conjunto de locales flotantes en el Dique 1 de Puerto Madero. Hoy cuentan con estudios en Buenos Aires y Santiago de Chile."
    },
    {
        image: "../../assets/responsible/camps_tiscornia.jpg",
        title: "Camps/Tiscornia",
        subtitle: "ARQUITECTOS",
        content: "Fundado en 1984 por los arquitectos Luis Camps y Ramiro Tiscornia, este estudio de arquitectura brinda un servicio integral para satisfacer a sus clientes tanto en el plano comercial como en lo técnico y funcional."
    },
    {
        image: "../../assets/responsible/interwin.jpg",
        title: "Interwin",
        subtitle: "CO DESARROLLO Y DEFINICION DE PRODUCTO INMOBILIARIO",
        content: "Inmobiliaria con 27 años de trayectoria y más de 1,5 millones de m2 comercializados. Actualmente, cuenta con un equipo de 40 profesionales especializados en la comercialización de propiedades residenciales, locales y oficinas en Argentina y el exterior."
    },
    {
        image: "../../assets/responsible/obras_sistemas.jpg",
        title: "Obras & Sistemas",
        subtitle: "CONSTRUCTORA",
        content: "Fundada en 1983 por los ingenieros Marcelo Perri, Luis Perri y Luis E. Zolezzi, se dedica al desarrollo de actividades vinculadas a la industria de la construcción, obras de arquitectura e ingeniería y consultoría técnica. Tienen construido más de 65 obras de envergadura, como el aeropuerto del Palomar, Star Tower Olivos, Shopping San Justo, el Instituto de Neurociencias de Buenos Aires o el Faena Art Center."
    },
];