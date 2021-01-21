import { ICollapseMenuData } from '../components/collapse-menu/collapse-menu.component';
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
    {icon: 'dollar-circle', title: 'MONEDA DEL FONDO', value: 'DÓLAR'},
    {icon: 'signal', title: 'RENTABILIDAD ESTIMADA TOTAL', value: '25~35%'},
    {icon: 'fund', title: 'TIR ESTIMADA', value: '10,4%'},
    {icon: 'clock-circle', title: 'DURACIÓN ESTIMADA', value: '36 meses'},
    {icon: 'pie-chart', title: 'INVERSIÓN MÍNIMA', value: 'USD 1.000'},
    {icon: 'project', title: 'OPERADOR', value: 'Crowdium S.R.L'},
    {icon: 'profile', title: 'VEHÍCULO LEGAL', value: 'Fideicomiso privado sin autorización de oferta pública por CNV'},
    {icon: 'bank', title: 'FIDUCIARIA PÚBLICA ADMINISTRADORA', value: 'Compañía Fiduciaria Americana S.A.'},
];

export const descriptionData:string = `
    <p>
        HUB Cabildo es un desarrollo inmobiliario residencial premium, ubicado en el barrio de Núñez sobre la Av. Cabildo, frente a la Plaza Balcarce y el Blvd. Comodoro Rivadavia. 
        Al ser uno de los desarrollos de mayor calidad constructiva de la zona, con una ubicación, diseño y arquitectura exclusiva, su venta, una vez terminada la obra, 
        permitirá ofrecer un valor por m² más elevado que el promedio y así, generar una alta revalorización para sus inversores.
    </p>
    <blockquote class="success">
        A través del modelo del <b>crowdfunding inmobiliario</b>, el <b>fideicomiso privado</b> propone adquirir 28 unidades de pozo a precio fijo y <b>cerrado</b> con un 
        importante descuento sobre el precio de lista del desarrollador por la compra mayorista y de contado. <b>HUB Cabildo</b> es uno de los desarrollos más destacados 
        de la zona, donde la revalorización desde el pozo a terminado supera el 10% anual, estimando generar así una <strong>rentabilidad entre el 25 y 35% en dólares en 
        36 meses.</strong>
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
                <strong>Oportunidad única de compra:</strong> 25% por debajo del precio de lista del desarrollador.
            </p>
        </li>
        <li>
            <p>
                <strong>Compra de contado:</strong> genera un ahorro del ajuste por CAC y/o inflación respecto de otras alternativas.
            </p>
        </li>
        <li>
            <p>
                <strong>Fuerte revalorización:</strong> por el perfil de cliente final y escasez de este tipo de producto en la zona.
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
        venderán las unidades, con el objetivo de maximizar el retorno de los inversores en un horizonte temporal de 36 meses.
    </p>
    <p>
        La <strong>Fiduciaria CFA</strong> se encargará de administrar los fondos remanentes depositados en el fideicomiso para afrontar los gastos de mantenimiento e 
        impuestos del fideicomiso.
    </p>
    <p>
        Se espera que el precio de venta aumente de forma considerable debido a que las unidades se adquieren en una etapa temprana del desarrollo del edificio 
        (final de la demolición, inicio de obra estructural) además de estar ubicado en una de las zonas con mayor crecimiento y revalorización de los últimos años.
    </p>
    <p>
        Sumado a ello, <strong>HUB Cabildo</strong> será una semitorre premium de gran escala y con una calidad constructiva de primer nivel que generará un diferencial 
        importante respecto a cualquier otro desarrollo de la zona y logrará atraer la atención tanto de inversores como compradores finales lo que <strong> agilizará la venta 
        y mantendrá los valores en los máximos del mercado. </strong>
    </p>
`;

export const timelineProjectData: ITimeline[] = [
    {
        step: `<icon-acquisition></icon-acquisition>`, 
        title: "Adquisición", 
        subtitle: "MARZO 2021", 
        content: "Una vez finalizada la etapa de fondeo, la fiduciaria ordenará la compra de las unidades con un importante descuento respecto de similares departamentos en el edificio."
    },
    {
        step: `<icon-sale></icon-sale>`, 
        title: "Etapa de Obra",  
        subtitle: "ABRIL 2021 - SEPTIEMBRE 2023", 
        content: "La contrucción del edificio que comenzó en septiembre del 2020 continuará con su etapa de obra durante los próximos 36 meses aproximadamente. Se analizará periódicamente el mercado a fin de encontrar el mejor momento de venta durante la obra, entendiendo que a su finalización será uno de los mejores momentos para vender."
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
                El dinero se utilizará para la compra mayorista de departamentos en la semitorre HUB Cabildo que se encuentra actualmente en etapa de construcción y todos 
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
                En primer lugar, la seguridad de los proyectos inmobiliarios en construcción esta dado por la trayectoria del desarrollador y la constructora. En este 
                caso, Tiscornia y Obras & Sistemas son unos de los desarrolladores y constructora más grande de la Argentina con el 100% de obras terminadas teniendo 
                entre sus proyectos obras de gran envergadura como más de 65 obras de envergadura, como el aeropuerto del Palomar, Star Tower Olivos, Shopping San Justo, 
                el Instituto de Neurociencias de Buenos Aires o el Faena Art Center.
            </p>
            <p>
                En segundo lugar, <strong>HUB Cabildo</strong> tiene la tierra comprada y paga al 100% y más del 70% de las unidades vendidas, con lo cual ya posee el capital necesario 
                para finalizar la obra.
            </p>
        `
    },
    {
        title: "¿Cuándo recibo los retornos de mi inversión?",
        content: `
            <p>
                Una vez realizada la compra de los departamentos, se analizará periódicamente el mercado a fin de encontrar el mejor momento de venta durante la obra, 
                entendiendo que a su finalización será uno de los mejores momentos. A medida se vayan vendiendo las unidades, se distribuirá el resultado de cada venta.
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
                Transferencia bancaria en pesos o dólares y/o dinero desde la cuenta comitente.
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
                departamentos y será administrado por una fiduciaria pública registrada en la Comisión Nacional de Valores (CNV)*. Crowdium en ningún momento tiene acceso 
                al capital invertido ya que el dinero es transferido directamente a la cuenta del fideicomiso.
            </p>
        `
    },
    {
        title: "¿Cuáles son los factores de riesgo?",
        content: `
            <p>
                El riesgo de participar en este proyecto es el de participar en la compra de departamentos desde el pozo. Adicionalmente, para reducir los riesgos 
                inherentes del mercado inmobiliario, se han realizado las debidas diligencias de todos los involucrados en el desarrollo del proyecto 
                <strong>HUB Cabildo<strong>.
            </p>
        `
    },
    {
        title: "¿Quién administra el capital?",
        content: `
            <p>
                El capital es administrado por CFA, Compañía Fiduciaria Americana, una fiduciaria pública registrada en la Comisión Nacional de Valores (*).
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
                La forma de suscripción al proyecto podrá ser en pesos, dólares. Mediante transferencia bancaria a la cuenta del fideicomiso u operando directamente a 
                través de tu cuenta comitente en Balanz.
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