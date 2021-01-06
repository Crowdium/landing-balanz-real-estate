import { IGalleryData } from '../components/gallery/gallery.component';
import { ITimeline } from '../components/timeline/timeline.component';
import { IResume } from '../containers/resume-investment/resume-investment.component';

export const scrollSpyMenu = [
    {id: "#resume", content: "Resumen"},
    {id: "#description", content: "Descripción del Proyecto"},
    {id: "#timeline", content: "Línea de Tiempo"},
    {id: "#responsible", content: "Responsables"},
    {id: "#faq", content: "Preguntas Frecuentes"},
]
export const galleryData:IGalleryData[] = [
    {path: "../../assets/gallery/hub-cabildo-1.jpg"},
    {path: "../../assets/gallery/hub-cabildo-2.jpg"},
    {path: "../../assets/gallery/hub-cabildo-3.jpg"},
    {path: "../../assets/gallery/hub-cabildo-4.jpg"},
    {path: "../../assets/gallery/hub-cabildo-5.jpg"},
    {path: "../../assets/gallery/hub-cabildo-6.jpg"},
    {path: "../../assets/gallery/hub-cabildo-7.jpg"}
]
export const resumeList:IResume[] = [
    {icon: 'dollar-circle', title: 'MONEDA DEL FONDO', value: 'DOLAR'},
    {icon: 'signal', title: 'RENTABILIDAD ESTIMADA TOTAL', value: '25~35%'},
    {icon: 'fund', title: 'TIR ESTIMADA', value: '10,4%'},
    {icon: 'clock-circle', title: 'DURACIÓN ESTIMADA', value: '36 Meses'},
    {icon: 'pie-chart', title: 'INVERSIÓN MÍNIMA', value: 'USD 1.000'},
    {icon: 'project', title: 'ASSET MANAGER', value: 'Crowdium S.R.L'},
    {icon: 'home', title: 'ASSET OWNER', value: 'Fideicomiso Cabildo'},
    {icon: 'profile', title: 'TIPO DE FONDO', value: 'Fideicomiso Ordinario De Administración'},
    {icon: 'bank', title: 'FIDUCIARIA PÚBLICA ADMINISTRADORA', value: 'Compañía Fiduciaria Americana S.A'},
]
export const descriptionData:string = `
    <p>
        HUB Cabildo es un desarrollo inmobiliario residencial premium, ubicado en el barrio de Núñez sobre la Av. Cabildo frente a la Plaza Balcarce y el Blvd. Comodoro Rivadavia. 
        Al ser uno de los desarrollos de mayor calidad constructiva de la zona, con una ubicación, diseño y arquitectura exclusiva, su venta, una vez terminada la obra, 
        permitirá ofrecer un valor por m² más elevado que el promedio y así, generar una alta revalorización para sus inversores.
    </p>
    <blockquote class="success">
        Se propone adquirir unidades de pozo a precio fijo con un <strong>25% de descuento</strong> sobre el precio de lista del desarrollador por la compra mayorista y de 
        contado. <b>HUB Cabildo</b> es uno de los desarrollos más destacados de la zona, donde la revalorización desde el pozo a terminado supera el 10% anual, estimando generar 
        así una <strong>rentabilidad entre el 25 y 35% en dólares en 36 meses.</strong>
    </blockquote>
    <p>
        La torre cuenta con 186 unidades distribuidas en 14 pisos con full amenities, sobre un terreno de más de 1.000mts² de superficie. Al estar ubicado en una manzana 
        triangular con 130mts lineales de fachada, todas las unidades son al frente con vista verde a la plaza Balcarce o la árboleda de los boulevards Rivadavía y García del 
        Río. <strong>Las unidades que se adquirirán son departamentos de 1 a 4 ambientes de entre 35 y 100mts².</strong>
    </p>
    <p>
        Núñez se destaca por ser una de las zonas con mayor crecimiento y revalorización de los últimos años. Es una ubicación privilegiada con una amplia variedad de opciones 
        y alternativas gastronómicas, comerciales, educativas y culturales. rodeada por parques, boulevards, calles amplias, mucha arboleda, circuitos aeróbicos, bicisendas y 
        con accesos rápidos al centro de la ciudad (Metrobus, subte línea D y tren ramal mitre) y a zona norte del Gran Buenos Aires (Panamericana y Av. Gral Paz).
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
                50.000mts² construidos.
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
        title: "Obra + Venta de la Unidad",  
        subtitle: "MARZO 2022 - MARZO 2023", 
        content: "Las unidades se pondrán a la venta tratando de maximizar el valor de venta durante la construcción del edificio. Los mejores momentos de venta son al terminar las losas del edificio (15 pisos) o con la posterior posesión de las unidades. Se analizará periódicamente el mercado a fin de encontrar el mejor momento de venta, entendiendo que la finalización de la obra se estima a los 30 meses desde la adquisición de las unidades."
    },
    {
        step: `<icon-tools></icon-tools>`, 
        title: "Finalización de la Obra",
        subtitle: "ABRIL 2023 - AGOSTO 2023", 
        content: "Se estima que la obra finalice entre marzo y agosto del 2023"
    },
]
export const responsibleData = [
    {
        image: "../../assets/responsible/tiscornia.jpg",
        title: "Tiscornia",
        subtitle: "DESARROLLADOR",
        content: "Con 20 años de trayectoria, el Estudio Tiscornia, fundado y presidido por el arquitecto César Felipe Tiscornia, se especializa en el desarrollo de edificios en las mejores zonas de la ciudad de Buenos Aires. Su amplia experiencia en el sector está plasmada en los casi 80.000 m2 de obra construidos en Palermo, Las Cañitas y Barrio Norte."
    },
    {
        image: "../../assets/responsible/bma.jpg",
        title: "Bodas Miani Anger",
        subtitle: "BMA ESTUDIO DE ARQUITECTURA",
        content: "El estudio BMA fue fundado por Martín Bodas, Rodolfo Miani y Alejandro Anger a principios de 1990. Se dedica a prestar servicios integrales respecto a proyectos y desarrollos inmobiliarios en general y se especializa en obras comerciales como por ejemplo la ampliación del Aeropuerto Jorge Newbery, el Solar de la Abadía y diversos cines para la cadena Village. También realizaron el Tortugas Open Mall inaugurado en 2011 y Madero Walk un conjunto de locales flotantes en el Dique 1 de Puerto Madero. Hoy en día cuentan con dos estudios, uno en la ciudad de Buenos Aires y el otro en Santiago de Chile."
    },
    {
        image: "../../assets/responsible/camps_tiscornia.jpg",
        title: "Camps/Tiscornia",
        subtitle: "ARQUITECTOS",
        content: "Fundado en 1984 por los arquitectos Luis Camps y Ramiro Tiscornia, este estudio de arquitectura brinda un servicio integral para satisfacer a sus clientes tanto en el plano comercial como en lo técnico y funcional. Sus años de experiencia los llevaron a especializarse en trabajos de refuncionalización y equipamiento de edificios de oficinas en donde el estudio se compromete en la administración de tareas para optimizar tiempos y costos. Su búsqueda está orientada a dar una respuesta estética mediante criterios de simpleza y sobriedad, sin adherir específicamente a ninguna corriente formal."
    },
    {
        image: "../../assets/responsible/interwin.jpg",
        title: "Interwin",
        subtitle: "CO DESARROLLO Y DEFINICION DE PRODUCTO INMOBILIARIO",
        content: "Con 20 años de trayectoria, el Estudio Tiscornia, fundado y presidido por el arquitecto César Felipe Tiscornia, se especializa en el desarrollo de edificios en las mejores zonas de la ciudad de Buenos Aires. Su amplia experiencia en el sector está plasmada en los casi 80.000 m2 de obra construidos en Palermo, Las Cañitas y Barrio Norte."
    },
    {
        image: "../../assets/responsible/bma.jpg",
        title: "Obras & Sistemas",
        subtitle: "CONSTRUCTORA",
        content: "Fundada en 1983 por los ingenieros Marcelo Perri, Luis Perri y Luis E. Zolezzi, quienes conformaron una eficiente organización técnica y empresarial especializada en el desarrollo de actividades vinculadas a todos los ámbitos de la industria de la construcción, obras de arquitectura e ingeniería y consultoría técnica. Trabajando con los desarrolladores y empresas más importantes del país, y habiendo concluido más de 65 obras de envergadura, como el aeropuerto del Palomar, Star Tower Olivos, Shopping San Justo, el Instituto de Neurociencias de Buenos Aires o el Faena Art Center."
    },
]