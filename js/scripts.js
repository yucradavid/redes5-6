document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const questionsContainer = document.querySelector('.questions-container');
    const toggleAnswersBtn = document.getElementById('toggle-answers');
    const searchInput = document.getElementById('search');
    
    // Verificar si los elementos clave existen
    if (!questionsContainer) {
        console.error('No se encontró el contenedor de preguntas (questions-container).');
        return;
    }
    if (!toggleAnswersBtn) {
        console.error('No se encontró el botón de "toggle-answers".');
        return;
    }
    if (!searchInput) {
        console.error('No se encontró el campo de búsqueda (search).');
        return;
    }
    // Todas las 68 preguntas con respuestas y explicaciones
    const questions = [
        // Preguntas 1-10
        {
            number: 1,
            text: "¿Qué información adicional está contenida en el ID de sistema extendido de 12 bits de una BPDU?",
            options: ["Dirección MAC", "ID DE VLAN", "Dirección IP", "ID de puerto"],
            answer: "ID DE VLAN"
        },
        {
            number: 2,
            text: "Durante la implementación de Spanning Tree Protocol, todos los switches son reiniciados por el administrador de la red. ¿Cuál es el primer paso del proceso electoral del árbol de expansión?",
            options: [
                "Cada interruptor con un ID de raíz inferior al de su vecino no enviará BPDU.",
                "Todos los interruptores envían BPDU anunciándose como el puente raíz.",
                "Cada interruptor determina la mejor ruta para reenviar el tráfico.",
                "Cada conmutador determina qué puerto bloquear para evitar que ocurra un bucle."
            ],
            answer: "Todos los interruptores envían BPDU anunciándose como el puente raíz."
        },
        {
            number: 3,
            text: "¿Qué función de puerto STP es adoptada por un puerto de conmutación si no hay otro puerto con un costo menor para el puente raíz?",
            options: ["puerto designado", "puerto raíz", "alterno", "puerto deshabilitado"],
            answer: "puerto raíz",
            explanation: "El puerto raíz es el puerto con el costo más bajo para llegar al puente raíz."
        },
        {
            number: 4,
            text: "¿Qué dos conceptos se relacionan con un puerto de conmutación que está destinado a tener solo dispositivos finales conectados y que nunca se utilizará para conectarse a otro interruptor? (Elige dos.)",
            options: ["ID de puente", "puerto de borde", "ID de sistema extendido", "PortFast", "PVST+"],
            answer: ["puerto de borde", "PortFast"]
        },
        {
            number: 5,
            text: "¿Qué tres componentes se combinan para formar un ID de puente?",
            options: ["ID de sistema extendido", "costo", "Dirección IP", "prioridad del puente", "Dirección MAC", "ID de puerto"],
            answer: ["ID de sistema extendido", "prioridad del puente", "Dirección MAC"],
            explanation: "Los tres componentes que se combinan para formar un ID de puente son la prioridad de puente, el ID de sistema extendido y la dirección MAC."
        },
        {
            number: 6,
            text: "Haga coincidir el protocolo STP con la descripción correcta. (No se utilizan todas las opciones.)",
            options: [
                "PVST: Implementación de Cisco de IEEE 802.1D",
                "RSTP: Mejora convergente rápida de IEEE 802.1D",
                "MSTP: Estándar IEEE que reduce el número de instancias STP",
                "PVST+: Una evolución de STP que proporciona una convergencia más rápida"
            ],
            answer: [
                "PVST: Implementación de Cisco de IEEE 802.1D",
                "RSTP: Mejora convergente rápida de IEEE 802.1w",
                "MSTP: Estándar IEEE que reduce el número de instancias STP"
            ],
            image: ["img/1.jpg", "img/2.jpg"]
        },
        {
            number: 7,
            text: "¿En qué dos estados de puerto un switch aprende direcciones MAC y procesa BPDU en una red PVST? (Elige dos.)",
            options: ["discapacitado", "reenvío", "escuchando", "bloqueo", "aprendizaje"],
            answer: ["reenvío", "aprendizaje"],
            explanation: "Los conmutadores aprenden direcciones MAC en los estados de puerto de aprendizaje y reenvío. Reciben y procesan BPDU en los estados portuarios de bloqueo, escucha, aprendizaje y reenvío."
        },
        {
            number: 8,
            text: "Si no se configura ninguna prioridad de puente en PVST, ¿qué criterios se consideran al elegir el puente raíz?",
            options: ["dirección MAC más baja", "la dirección IP más baja", "la dirección IP más alta", "la dirección MAC más alta"],
            answer: "dirección MAC más baja",
            explanation: "Solo un interruptor puede ser el puente raíz para una VLAN. El puente raíz es el interruptor con el BID más bajo. La BID se determina por prioridad y la dirección MAC. Si no se configura ninguna prioridad, todos los switches utilizan la prioridad predeterminada y la elección del puente raíz se basará en la dirección MAC más baja."
        },
        {
            number: 9,
            text: "Haga coincidir la función de árbol de expansión con el tipo de protocolo. (No se utilizan todas las opciones.)",
            options: [
                "Implementación de Cisco de IEEE 802.1D: PVST",
                "Mejora convergente rápida de IEEE 802.1D: RSTP",
                "Estándar IEEE que reduce el número de instancias STP: MSTP",
                "Propietario por implementación de VLAN de IEEE 802.1w: PVST+",
                "rápida una evolución de STP que proporciona una convergencia más rápida: RSTP"
            ],
            answer: [
                "Implementación de Cisco de IEEE 802.1D: PVST",
                "Mejora convergente rápida de IEEE 802.1w: RSTP",
                "Estándar IEEE que reduce el número de instancias STP: MSTP",
                "Una evolución de STP que proporciona una convergencia más rápida: PVST+"
            ],
            image: ["img/3.jpg", "img/4.png"]
        },
        {
            number: 10,
            text: "Cuando el comando show spanning-tree vlan 33 se emite en un conmutador, se muestran tres puertos en el estado de reenvío. ¿En qué dos roles de puerto podrían funcionar estas interfaces mientras están en el estado de reenvío? (Elige dos.)",
            options: ["alterno", "designado", "discapacitado", "bloqueado", "raíz"],
            answer: ["designado", "raíz"],
            explanation: "El papel de cada uno de los tres puertos será el puerto designado o el puerto raíz. Los puertos en el estado discapacitado están deshabilitados administrativamente. Los puertos en el estado de bloqueo son puertos alternativos."
        },
        
        // Preguntas 11-20
        {
            number: 11,
            text: "¿Cuál es la función de STP en una red escalable?",
            options: [
                "Disminuye el tamaño del dominio de falla para contener el impacto de las fallas.",
                "Protege el borde de la red empresarial de la actividad maliciosa.",
                "Combina múltiples enlaces troncales de interruptor para actuar como un enlace lógico para un mayor ancho de banda.",
                "Deshabilita las rutas redundantes para eliminar los bucles de la Capa 2."
            ],
            answer: "Deshabilita las rutas redundantes para eliminar los bucles de la Capa 2.",
            explanation: "STP es un componente importante en una red escalable porque permite implementar conexiones físicas redundantes entre dispositivos de Capa 2 sin crear bucles de Capa 2. STP evita que se formen bucles de Capa 2 al deshabilitar las interfaces en los dispositivos de Capa 2 cuando crearían un bucle."
        },
        {
            number: 12,
            text: "¿Cuál es una característica de la expansión del árbol?",
            options: [
                "Está habilitado de forma predeterminada en los conmutadores Cisco.",
                "Se utiliza para descubrir información sobre un dispositivo Cisco adyacente.",
                "Tiene un mecanismo TTL que funciona en la Capa 2.",
                "Evita la propagación de tramas de difusión de Capa 2."
            ],
            answer: "Está habilitado de forma predeterminada en los conmutadores Cisco.",
            explanation: "Spanning tree funciona en la capa 2 en redes basadas en Ethernet y está habilitado de forma predeterminada, pero no tiene un mecanismo TTL. El árbol de expansión existe porque los cuadros de Capa 2 no tienen un mecanismo TTL. Los cuadros de capa 2 todavía se transmiten cuando el árbol de expansión está habilitado, pero los cuadros solo se pueden transmitir a través de una sola ruta a través de la red de capa 2 que se creó mediante el árbol de expansión. Cisco Discovery Protocol (CDP) se utiliza para descubrir información sobre un dispositivo Cisco adyacente."
        },
        {
            number: 13,
            text: "¿Qué estándar de árbol de expansión admite solo un puente raíz para que el tráfico de todas las VLAN fluya por la misma ruta?",
            options: ["PVST+", "802.1D", "MST", "PVST rápido"],
            answer: "802.1D",
            explanation: "MST es la implementación Cisco de MSTP, un protocolo estándar IEEE que proporciona hasta 16 instancias de RSTP. PVST+ proporciona una instancia de árbol de expansión 802.1D separada para cada VLAN que está configurada en la red. 802.1D es el estándar STP original definido por el IEEE y permite solo un puente raíz para todas las VLAN. 802.1w, o RSTP, proporciona una convergencia más rápida pero aún utiliza solo una instancia STP para todas las VLAN."
        },
        {
            number: 14,
            text: "¿Cuál es el propósito del Spanning Tree Protocol (STP)?",
            options: [
                "crea dominios de colisión más pequeños",
                "evita los bucles de enrutamiento en un enrutador",
                "previene bucles de capa 2",
                "permite a los dispositivos Cisco intercambiar actualizaciones de tablas de enrutamiento",
                "crea dominios de transmisión más pequeños"
            ],
            answer: "previene bucles de capa 2",
            explanation: "El Spanning-Tree Protocol (STP) crea una ruta a través de una red de conmutación para evitar bucles de Capa 2."
        },
        {
            number: 15,
            text: "¿Cuál es el valor utilizado para determinar qué puerto en un puente no raíz se convertirá en un puerto raíz en una red STP?",
            options: [
                "el costo del camino",
                "la dirección MAC más alta de todos los puertos en el conmutador",
                "la dirección MAC más baja de todos los puertos en el conmutador",
                "el número de revisión VTP"
            ],
            answer: "el costo del camino",
            explanation: "STP establece un puerto raíz en cada puente no raíz. El puerto raíz es la ruta de menor costo desde el puente no raíz hasta el puente raíz, lo que indica la dirección de la mejor ruta hacia el puente raíz. Esto se basa principalmente en el costo de la ruta al puente raíz."
        },
        {
            number: 16,
            text: "Consulte la exposición. ¿Qué cambio será el puente raíz después de que se complete el proceso electoral?",
            options: ["S1", "S2", "S3", "S4"],
            answer: "S2",
            explanation: "El puente raíz está determinado por el ID de puente más bajo, que consiste en el valor de prioridad y la dirección MAC. Debido a que los valores de prioridad de todos los switches son idénticos, la dirección MAC se utiliza para determinar el puente raíz. Debido a que S2 tiene la dirección MAC más baja, S2 se convierte en el puente raíz.",
            image: ["img/5.webp"]
        },
        {
            number: 17,
            text: "¿Cuáles son dos inconvenientes para apagar el árbol de expansión y tener múltiples rutas a través de la red de conmutadores de Capa 2? (Elige dos.)",
            options: [
                "La tabla de direcciones MAC se vuelve inestable.",
                "El interruptor actúa como un concentrador.",
                "La seguridad portuaria se vuelve inestable.",
                "Los marcos de difusión se transmiten indefinidamente.",
                "La seguridad del puerto apaga todos los puertos que tienen dispositivos conectados."
            ],
            answer: ["La tabla de direcciones MAC se vuelve inestable.", "Los marcos de difusión se transmiten indefinidamente."],
            explanation: "El árbol de expansión nunca debe ser desactivado. Sin ella, la tabla de direcciones MAC se vuelve inestable, las tormentas de transmisión pueden hacer que los clientes de red y los conmutadores sean inutilizables, y se pueden entregar múltiples copias de marcos de unidifusión a los dispositivos finales."
        },
        {
            number: 18,
            text: "Una red de pequeña empresa tiene seis conmutadores de capa 2 interconectados. Actualmente, todos los conmutadores utilizan el valor de prioridad de puente predeterminado. ¿Qué valor se puede utilizar para configurar la prioridad de puente de uno de los interruptores para asegurarse de que se convierte en el puente raíz en este diseño?",
            options: ["1", "28672", "32768", "34816", "61440"],
            answer: "28672",
            explanation: "El valor de prioridad de puente predeterminado para todos los conmutadores Cisco es 32768. El rango es de 0 a 61440 en incrementos de 4096. Por lo tanto, los valores 1 y 34816 no son válidos. Configurar un interruptor con el valor más bajo de 28672 (y dejar el valor de prioridad del puente de todos los demás interruptores sin cambios) hará que el interruptor se convierta en el puente raíz."
        },
        {
            number: 19,
            text: "Consulte la exposición. ¿Qué cambio será el puente raíz después de que se complete el proceso electoral?",
            options: [
                "El tráfico no se puede enviar a dos conmutadores diferentes a través del mismo enlace EtherChannel.",
                "El tráfico no se puede enviar a dos conmutadores diferentes, sino solo a dos dispositivos diferentes, como un servidor habilitado para EtherChannel y un conmutador.",
                "El tráfico solo se puede enviar a dos conmutadores diferentes si EtherChannel se implementa en interfaces Gigabit Ethernet.",
                "El tráfico solo se puede enviar a dos conmutadores diferentes si EtherChannel se implementa en los conmutadores de capa 3."
            ],
            answer: "El tráfico no se puede enviar a dos conmutadores diferentes a través del mismo enlace EtherChannel.",
            explanation: "Un enlace EtherChannel solo se puede crear entre dos conmutadores o entre un servidor habilitado para EtherChannel y un conmutador. El tráfico no se puede enviar a dos conmutadores diferentes a través del mismo enlace EtherChannel.",
            image: ["img/6.png"]
        },
        {
            number: 20,
            text: "¿Qué declaración es cierta con respecto al uso de PAgP para crear EtherChannels?",
            options: [
                "Requiere dúplex completo.",
                "Aumenta el número de puertos que participan en el árbol de expansión.",
                "Requiere más enlaces físicos que LACP.",
                "Exige que se utilice un número par de puertos (2, 4, 6, etc.) para la agregación.",
                "Es propiedad de Cisco."
            ],
            answer: "Es propiedad de Cisco.",
            explanation: "PAgP se utiliza para agregar automáticamente múltiples puertos en un paquete EtherChannel, pero solo funciona entre dispositivos Cisco. LACP se puede utilizar para el mismo propósito entre dispositivos Cisco y no Cisco. PAgP debe tener el mismo modo dúplex en ambos extremos y puede usar dos puertos o más. El número de puertos depende de la plataforma o módulo de conmutación. Un enlace agregado EtherChannel es visto como un puerto por el algoritmo de árbol de expansión."
        },

        // Preguntas 21-30
        {
            number: 21,
            text: "¿Cuáles son dos requisitos para poder configurar un EtherChannel entre dos switches? (Elige dos.)",
            options: [
                "Todas las interfaces deben funcionar a la misma velocidad.",
                "Todas las interfaces deben asignarse a diferentes VLAN.",
                "Deben existir diferentes rangos permitidos de VLAN en cada extremo.",
                "Todas las interfaces deben funcionar en el mismo modo dúplex.",
                "Las interfaces que están involucradas deben ser contiguas en el interruptor."
            ],
            answer: ["Todas las interfaces deben funcionar a la misma velocidad.", "Todas las interfaces deben funcionar en el mismo modo dúplex."],
            explanation: "Todas las interfaces en el paquete EtherChannel deben asignarse a la misma VLAN o configurarse como un troncal. Si el rango permitido de VLAN no es el mismo, las interfaces no forman un EtherChannel incluso cuando se configuran en modo automático o deseable."
            
        },
        {
            number: 22,
            text: "Consulte la exposición. Sobre la base de la salida que se muestra, ¿qué se puede determinar sobre el paquete EtherChannel?",
            options: [
                "El paquete EtherChannel está inactivo.",
                "Se utilizan dos puertos Gigabit Ethernet para formar el EtherChannel.",
                "Se utilizó un protocolo propietario de Cisco para negociar el enlace EtherChannel.",
                "El paquete EtherChannel está operando tanto en la Capa 2 como en la Capa 3."
            ],
            answer: "Se utilizó un protocolo propietario de Cisco para negociar el enlace EtherChannel.",
            explanation: "Se pueden usar dos protocolos para enviar marcos de negociación que se utilizan para tratar de establecer un enlace EtherChannel: PAgP y LACP. PAgP es propiedad de Cisco, y LACP se adhiere al estándar de la industria."
            ,image: ["img/7.webp"]
        },
        {
            number: 23,
            text: "¿Qué dos parámetros deben coincidir en los puertos de dos switches para crear un PAgP EtherChannel entre los switches? (Elige dos.)",
            options: ["ID de puerto", "Modo PAgP", "Dirección MAC", "velocidad", "Información de VLAN"],
            answer: ["velocidad", "Información de VLAN"],
            explanation: "Para que se cree un EtherChannel, los puertos que se ocupan de los dos conmutadores deben coincidir en términos de velocidad, dúplex e información de VLAN. El modo PAgP debe ser compatible pero no necesariamente igual. El ID del puerto y las direcciones MAC no tienen que coincidir."
        },
        {
            number: 24,
            text: "Consulte la exposición. Un administrador de red está configurando un enlace EtherChannel entre dos conmutadores, SW1 y SW2. ¿Qué declaración describe el efecto después de que los comandos se emiten en SW1 y SW2?",
            options: [
                "El EtherChannel se establece después de que SW2 inicia la solicitud de enlace.",
                "El EtherChannel se establece después de que SW1 inicia la solicitud de enlace.",
                "El EtherChannel se establece sin negociación.",
                "El EtherChannel no logra establecer."
            ],
            answer: "El EtherChannel no logra establecer.",
            explanation: "Las interfaces GigabitEthernet 0/1 y GigabitEthernet 0/2 están configuradas “on” para el enlace EtherChannel. Este modo obliga a la interfaz a canalizar sin PAgP o LACP. El EtherChannel se establecerá solo si el otro lado también está configurado en “on”. Sin embargo, el modo en el lado SW2 se establece en PAgP deseable. Por lo tanto, no se establecerá el enlace EtherChannel."
            ,image: ["img/8.webp"]
        },
        {
            number: 25,
            text: "Consulte la exposición. Un administrador de red está configurando un enlace EtherChannel entre dos conmutadores, SW1 y SW2. Sin embargo, el enlace EtherChannel no se establece. ¿Qué cambio en la configuración corregiría el problema?",
            options: [
                "Configure el modo SW2 EtherChannel a deseable.",
                "Configure el modo SW2 EtherChannel en encendido.",
                "Configure el modo SW1 EtherChannel en encendido.",
                "Configure el modo SW2 EtherChannel a automático."
            ],
            answer: "Configure el modo SW2 EtherChannel a deseable.",
            explanation: "El modo EtherChannel debe ser compatible en cada lado para que el enlace funcione. Los tres modos del protocolo PAgP están activados, son deseables y son automáticos. Los tres modos del protocolo LACP están activados, activos y pasivos. Los modos compatibles incluyen encendido, autodeseable, deseable-deseable, activo-pasivo y activo-activo. Cualquier otra combinación no formará un enlace EtherChannel."
            ,image: ["img/9.png"]
        },
        {
            number: 26,
            text: "Un administrador de red configuró un enlace EtherChannel con tres interfaces entre dos conmutadores. ¿Cuál es el resultado si una de las tres interfaces está caída?",
            options: [
                "Las dos interfaces restantes continúan cargando tráfico de equilibrio.",
                "Las dos interfaces restantes se convierten en enlaces separados entre los dos conmutadores.",
                "Una interfaz se convierte en un enlace activo para el tráfico de datos y la otra se convierte en un enlace de copia de seguridad.",
                "El EtherChannel falla."
            ],
            answer: "Las dos interfaces restantes continúan cargando tráfico de equilibrio.",
            explanation: "EtherChannel crea una agregación que se ve como un enlace lógico. Proporciona redundancia porque el enlace general es una conexión lógica. La pérdida de un enlace físico dentro del canal no crea un cambio en la topología; el EtherChannel sigue siendo funcional."
        },
        {
            number: 27,
            text: "Un administrador de red está configurando un enlace EtherChannel entre los conmutadores SW1 y SW2 mediante el comando SW1(config-if-range)# channel-group 1 mode auto. ¿Qué comando se debe usar en SW2 para habilitar este EtherChannel?",
            options: [
                "SW2(config-if-range)# canal-grupo 1 modo pasivo",
                "SW2(config-if-range)# canal-grupo 1 modo deseable",
                "SW2(config-if-range)# canal-grupo 1 modo encendido",
                "SW2(config-if-range)# canal-grupo 1 modo activo"
            ],
            answer: "SW2(config-if-range)# canal-grupo 1 modo deseable",
            explanation: "Las posibles combinaciones para establecer un EtherChannel entre SW1 y SW2 usando LACP o PAgP son las siguientes:\nPAgP\nen adelante\nauto deseable\ndeseable deseable\nLACP\nen adelante\nactivo activo\npasivo activo\nEl modo EtherChannel elegido a cada lado del EtherChannel debe ser compatible para habilitarlo."
        },
        {
            number: 28,
            text: "¿Qué tecnología es un estándar de protocolo abierto que permite a los conmutadores agrupar automáticamente puertos físicos en un solo enlace lógico?",
            options: ["PAgP", "LACP", "PPP Multilink", "DTP"],
            answer: "LACP",
            explanation: "LACP, o Link Aggregation Control Protocol, está definido por IEEE 802.3ad y es un protocolo estándar abierto. LACP permite a los conmutadores agrupar automáticamente los puertos de conmutación en un único enlace lógico para aumentar el ancho de banda. PAgP, o Port Aggregation Protocol, realiza una función similar, pero es un protocolo propietario de Cisco. DTP es Dynamic Trunking Protocol y se utiliza para construir de forma automática y dinámica troncos entre interruptores. Multilink PPP se utiliza para equilibrar la carga de tráfico PPP a través de múltiples interfaces serie."
        },
        {
            number: 29,
            text: "¿Cuál es un requisito para configurar un EtherChannel de trunking entre dos switches?",
            options: [
                "El rango permitido de VLAN debe ser el mismo en ambos conmutadores.",
                "A las interfaces participantes se les debe asignar el mismo número de VLAN en ambos conmutadores.",
                "Las interfaces participantes deben ser físicamente contiguas en un interruptor.",
                "Las interfaces participantes deben estar en el mismo módulo en un conmutador."
            ],
            answer: "El rango permitido de VLAN debe ser el mismo en ambos conmutadores.",
            explanation: "Para habilitar un EtherChannel de trunking con éxito, el rango de VLAN permitidas en todas las interfaces debe coincidir; de lo contrario, el EtherChannel no se puede formar. Las interfaces involucradas en un EtherChannel no tienen que ser físicamente contiguas, o en el mismo módulo. Debido a que EtherChannel es trunking, las interfaces participantes se configuran como modo troncal, no como modo de acceso."
        },
        {
            number: 30,
            text: "¿Cuáles son dos ventajas de usar LACP? (Elige dos.)",
            options: [
                "Permite que los conmutadores conectados directamente negocien un enlace EtherChannel.",
                "Elimina la necesidad de configurar interfaces troncales al implementar VLAN en múltiples conmutadores.",
                "Disminuye la cantidad de configuración que se necesita en un interruptor.",
                "Proporciona un entorno simulado para probar la agregación de enlaces.",
                "Permite el uso de dispositivos multivendedores.",
                "LACP permite mezclar interfaces Fast Ethernet y Gigabit Ethernet dentro de un solo EtherChannel."
            ],
            answer: ["Permite que los conmutadores conectados directamente negocien un enlace EtherChannel.", "Permite el uso de dispositivos multivendedores."],
            explanation: "El Protocolo de Control de Agregación de Enlace (LACP) permite que los conmutadores multivendedores conectados directamente negocien un enlace EtherChannel. LACP ayuda a crear el enlace EtherChannel detectando la configuración de cada lado y asegurándose de que sean compatibles para que el enlace EtherChannel se pueda habilitar cuando sea necesario."
        },

        // Preguntas 31-40
        {
            number: 31,
            text: "Un conmutador está configurado para ejecutar STP. ¿Qué término describe un puerto no raíz que está permitido reenviar tráfico en la red?",
            options: ["puerto raíz", "puerto designado", "puerto alternativo", "discapacitado"],
            answer: "puerto designado"
        },
        {
            number: 32,
            text: "¿Cuáles son dos ventajas de EtherChannel? (Elige dos.)",
            options: [
                "Spanning Tree Protocol ve los enlaces físicos en un EtherChannel como una conexión lógica.",
                "El equilibrio de carga se produce entre enlaces configurados como diferentes EtherChannels.",
                "La configuración de la interfaz EtherChannel proporciona consistencia en la configuración de los enlaces físicos.",
                "Spanning Tree Protocol garantiza la redundancia mediante la transición de interfaces fallidas en un EtherChannel a un estado de reenvío.",
                "EtherChannel utiliza enlaces físicos actualizados para proporcionar un mayor ancho de banda."
            ],
            answer: ["Spanning Tree Protocol ve los enlaces físicos en un EtherChannel como una conexión lógica.", "La configuración de la interfaz EtherChannel proporciona consistencia en la configuración de los enlaces físicos."],
            explanation: "La configuración de EtherChannel de una interfaz lógica garantiza la consistencia de la configuración en los enlaces físicos en EtherChannel. El EtherChannel proporciona un mayor ancho de banda utilizando los puertos de conmutación existentes sin requerir ninguna actualización a las interfaces físicas. Los métodos de equilibrio de carga se implementan entre enlaces que forman parte del mismo Etherchannel. Debido a que EtherChannel ve los enlaces físicos agrupados como una conexión lógica, no se requiere un recálculo del árbol de expansión si falla uno de los enlaces físicos agrupados. Si falla una interfaz física, STP no puede hacer la transición de la interfaz fallida a un estado de reenvío."
        },
        {
            number: 33,
            text: "Consulte la exposición. ¿Cuáles son los posibles roles de puerto para los puertos A, B, C y D en esta red habilitada para RSTP?",
            options: [
                "alternativo, designado, raíz, raíz",
                "designado, alternativo, raíz, raíz",
                "alterno, raíz, designado, raíz",
                "designado, raíz, alternativo, raíz"
            ],
            answer: "alternativo, designado, raíz, raíz",
            explanation: "Debido a que S1 es el puente raíz, B es un puerto designado y puertos raíz C y D. RSTP admite un nuevo tipo de puerto, puerto alternativo en estado de descarte, que puede ser el puerto A en este escenario."
            ,image: ["img/10.webp"]
        },
        {
            number: 34,
            text: "Consulte la exposición. ¿Qué tecnología de conmutación permitiría agregar cada enlace de interruptor de capa de acceso para proporcionar más ancho de banda entre cada interruptor de Capa 2 y el interruptor de Capa 3?",
            options: ["enredar", "HSRP", "PortFast", "EtherCanal"],
            answer: "EtherCanal",
            explanation: "PortFast se utiliza para reducir la cantidad de tiempo que un puerto pasa pasando por el algoritmo de árbol de expansión, de modo que los dispositivos puedan comenzar a enviar datos antes. El trunking se puede implementar junto con EtherChannel, pero el trunking por sí solo no agrega enlaces de conmutación. HSRP se utiliza para equilibrar el tráfico de carga a través de dos conexiones diferentes a dispositivos de Capa 3 para la redundancia de puerta de enlace predeterminada. HSRP no agrega enlaces en la Capa 2 o la Capa 3 como lo hace EtherChannel."
            ,image: ["img/11.webp"]
        },
        {
            number: 35,
            text: "Consulte la exposición. Un administrador quiere formar un EtherChannel entre los dos switches utilizando el Protocolo de agregación de puertos. Si el conmutador S1 está configurado para estar en modo automático, ¿qué modo debe configurarse en S2 para formar EtherChannel?",
            options: ["auto", "en", "fuera", "deseable"],
            answer: "deseable",
            explanation: "Un EtherChannel se formará a través de PAgP cuando ambos interruptores estén en modo encendido o cuando uno de ellos esté en modo automático o deseable y el otro esté en modo deseable."
            ,image: ["img/12.png"]
        },
        {
            number: 36,
            text: "Abra la actividad PT. Realice las tareas en las instrucciones de actividad y luego responda la pregunta.\n¿Qué conjunto de comandos de configuración emitidos en SW1 completará con éxito el enlace EtherChannel entre SW1 y SW2?",
            options: [
                "interfaz GigabitEthernet0/1 sin cierre",
                "interfaz Port-channel 1 sin cierre",
                "interfaz GigabitEthernet0/2 modo de grupo de canales 2 deseable",
                "interfaz GigabitEthernet0/1 modo de grupo de canales 1 deseable"
            ],
            answer: "interfaz GigabitEthernet0/1 modo de grupo de canales 1 deseable",
            explanation: "La emisión del comando show running-configuration en SW1 muestra que a la interfaz GigabitEthernet0/1 le falta el comando deseable del modo de grupo de canales 1 que competirá con la configuración EtherChannel para la interfaz GigabitEthernet0/1 y la interfaz GigabitEthernet0/2."
            ,image: ["img/13.webp"]
        },
        {
            number: 37,
            text: "Se está conectando un conjunto de conmutadores en una topología LAN. ¿Qué valor de prioridad de puente STP hará que sea menos probable que el interruptor se seleccione como la raíz?",
            options: ["65535", "4096", "32768", "61440"],
            answer: "61440",
            explanation: "La prioridad del puente STP es un número de dos bytes, pero solo se puede personalizar en incrementos de 4096. Se prefiere el número más pequeño, pero el valor de prioridad utilizable más grande es 61440."
        },
        {
            number: 38,
            text: "¿En qué dos estados de puerto PVST+ se aprenden las direcciones MAC? (Elige dos.)",
            options: ["aprendizaje", "reenvío", "discapacitado", "escuchando", "bloqueo"],
            answer: ["aprendizaje", "reenvío"],
            explanation: "Los dos estados de puerto PVST+ durante los cuales se aprenden las direcciones MAC y rellenan la tabla de direcciones MAC son los estados de aprendizaje y reenvío."
        },
        {
            number: 39,
            text: "¿Qué función de puerto se asigna al puerto de conmutación que tiene el costo más bajo para llegar al puente raíz?",
            options: ["puerto designado", "puerto deshabilitado", "puerto raíz", "puerto no designado"],
            answer: "puerto raíz",
            explanation: "El puerto raíz en un interruptor es el puerto con el costo más bajo para llegar al puente raíz."
        },
        {
            number: 40,
            text: "Un conmutador está configurado para ejecutar STP. ¿Qué término describe el puerto de conmutación más cercano, en términos de costo general, al puente raíz?",
            options: ["puerto raíz", "puerto designado", "puerto alternativo", "discapacitado"],
            answer: "puerto raíz"
        },
        // Preguntas 41-50
        {
            number: 42,
            text: "Un conmutador está configurado para ejecutar STP. ¿Qué término describe un campo utilizado para especificar un ID de VLAN?",
            options: ["ID de sistema extendido", "ID de puerto", "prioridad del puente", "ID de puente"],
            answer: "ID de sistema extendido"
        },
        {
            number: 43,
            text: "Un conmutador está configurado para ejecutar STP. ¿Qué término describe el punto de referencia para todos los cálculos de ruta?",
            options: ["puente de raíz", "puerto raíz", "puerto designado", "puerto alternativo"],
            answer: "puente de raíz"
        },
        {
            number: 44,
            text: "Un conmutador está configurado para ejecutar STP. ¿Qué término describe un campo que tiene un valor predeterminado de 32,768 y es el factor decisivo inicial al elegir un puente raíz?",
            options: ["prioridad del puente", "Dirección MAC", "ID de sistema extendido", "ID de puente"],
            answer: "prioridad del puente"
        },
        {
            number: 45,
            text: "¿Qué declaración describe una implementación de EtherChannel?",
            options: [
                "EtherChannel opera solo en la Capa 2.",
                "PAgP no se puede usar junto con EtherChannel.",
                "Un puerto troncal puede ser parte de un paquete EtherChannel.",
                "EtherChannel puede admitir hasta un máximo de diez enlaces separados."
            ],
            answer: "Un puerto troncal puede ser parte de un paquete EtherChannel.",
            explanation: "Se pueden agrupar hasta 16 enlaces en un EtherChannel utilizando el protocolo PAgP o LACP. EtherChannel se puede configurar como un paquete de Capa 2 o un paquete de Capa 3. La configuración de un paquete de Capa 3 está más allá del alcance de este curso. Si un puerto troncal es parte del paquete EtherChannel, todos los puertos del paquete deben ser puertos troncales y la VLAN nativa debe ser la misma en todos estos puertos. Una mejor práctica es aplicar la configuración a la interfaz del canal de puerto. La configuración se aplica automáticamente a los puertos individuales."
        },
        {
            number: 46,
            text: "Consulte la exposición. Un administrador de red emitió el commando de resumen show etherchannel en el conmutador S1. ¿Qué conclusión se puede sacar?",
            options: [
                "El EtherChannel está suspendido.",
                "El EtherChannel no es funcional.",
                "El protocolo de agregación de puertos PAgP está mal configurado.",
                "Los puertos FastEthernet Fa0/1, Fa0/2 y Fa0/3 no se unen al EtherChannel."
            ],
            answer: "El EtherChannel no es funcional.",
            explanation: "El estado EtherChannel se muestra como (SD), lo que significa que es un EtherChannel de Capa 2 con un estado de D o hacia abajo. Debido a que EtherChannel está inactivo, el estado de las interfaces en el grupo de canales es independiente. PAgP está configurado en S1, pero no hay ninguna indicación de si está configurado correctamente en S1. El problema también podría ser la configuración del conmutador EtherChannel adyacente."
            ,image: ["img/14.webp"]
        },
        {
            number: 47,
            text: "¿Qué declaración describe una característica de EtherChannel?",
            options: [
                "Puede combinar hasta un máximo de 4 enlaces físicos.",
                "Puede agrupar tipos mixtos de enlaces Ethernet de 100 Mb/s y 1Gb/s.",
                "Consiste en múltiples enlaces paralelos entre un conmutador y un enrutador.",
                "Se realiza combinando múltiples enlaces físicos que se ven como un enlace entre dos interruptores."
            ],
            answer: "Se realiza combinando múltiples enlaces físicos que se ven como un enlace entre dos interruptores.",
            explanation: "Un EtherChannel se forma combinando múltiples enlaces físicos Ethernet (del mismo tipo) para que se vean y configuren como un enlace lógico. Proporciona un enlace agregado entre dos conmutadores. Actualmente, cada EtherChannel puede consistir en hasta ocho puertos Ethernet configurados de manera compatible."
        },
        {
            number: 48,
            text: "¿Qué dos modos de grupo de canales colocarían una interfaz en un estado de negociación usando PAgP? (Elige dos.)",
            options: ["en", "deseable", "activo", "auto", "pasivo"],
            answer: ["deseable", "auto"],
            explanation: "Hay tres modos disponibles al configurar una interfaz para PAgP: encendido, deseable y automático. Solo deseable y automático coloque la interfaz en un estado de negociación. Los estados activo y pasivo se utilizan para configurar LACP y no PAgP."
        },
        {
            number: 49,
            text: "¿Qué configuración de modo permitiría la formación de un enlace EtherChannel entre los conmutadores SW1 y SW2 sin enviar tráfico de negociación?",
            options: [
                "SW1: en\nSW2: en",
                "SW1: deseable\nSW2: deseable",
                "SW1: auto\nSW2: auto",
                "trunking habilitado en ambos interruptores\nSW1: auto\nSW2: auto\nPortFast habilitado en ambos interruptores",
                "SW1: pasivo\nSW2: activo"
            ],
            answer: "SW1: en\nSW2: en",
            explanation: "La palabra clave de grupo de canales automáticos habilita PAgP solo si se detecta un dispositivo PAgP en el lado opuesto del enlace. Si se usa la palabra clave automática, la única forma de formar un enlace EtherChannel es si el dispositivo conectado opuesto está configurado con la palabra clave deseable. Las tecnologías PortFast y trunking son irrelevantes para formar un enlace EtherChannel. Aunque se puede formar un EtherChannel si ambos lados están configurados en modo deseable, PAgP está activo y los mensajes PAgP se envían constantemente a través del enlace, disminuyendo la cantidad de ancho de banda disponible para el tráfico de usuarios."
        },
        {
            number: 50,
            text: "Consulte la exposición. Se configuró un EtherChannel entre los conmutadores S1 y S2, pero las interfaces no forman un EtherChannel. ¿Cuál es el problema?",
            options: [
                "El número de canal de puerto de la interfaz debe ser diferente en cada interruptor.",
                "Los puertos de conmutación no se configuraron con velocidad y modo dúplex.",
                "Los puertos de conmutación deben configurarse como puertos de acceso con cada puerto asignado a una VLAN.",
                "El EtherChannel no se configuró con el mismo rango permitido de VLAN en cada interfaz."
            ],
            answer: "El EtherChannel no se configuró con el mismo rango permitido de VLAN en cada interfaz."
            ,image: ["img/15.png"]
        },
        //50-60
        {
            number: 51,
            text: "Cuando EtherChannel está configurado, ¿qué modo forzará una interfaz a un canal de puerto sin intercambiar paquetes de protocolo de agregación?",
            options: ["activo", "auto", "en", "deseable"],
            answer: "en",
            explanation: "Tanto para LACP como para PAgP, el modo “on” forzará una interfaz a un EtherChannel sin intercambiar paquetes de protocolo."
        },
        {
            number: 52,
            text: "¿Cuáles son dos métodos de equilibrio de carga en la tecnología EtherChannel? (Elige dos.)",
            options: [
                "combinación de puerto de origen e IP con puerto de destino e IP",
                "IP de origen a IP de destino",
                "puerto de origen al puerto de destino",
                "combinación de MAC de origen e IP a MAC de destino e IP",
                "origen MAC a destino MAC"
            ],
            answer: ["IP de origen a IP de destino", "origen MAC a destino MAC"],
            explanation: "Dependiendo de la plataforma de hardware, se pueden implementar uno o más métodos de equilibrio de carga. Estos métodos incluyen el equilibrio de carga MAC de origen a MAC de destino o el equilibrio de carga IP de origen a IP de destino, a través de los enlaces físicos."
        },
        {
            number: 53,
            text: "¿Qué protocolo proporciona hasta 16 instancias de RSTP, combina muchas VLAN con la misma topología física y lógica en una instancia RSTP común y proporciona soporte para PortFast, BPDU guard, BPDU filter, root guard y loop guard?",
            options: ["STP", "PVST+ rápido", "PVST+", "MST"],
            answer: "MST",
            explanation: "MST es la implementación Cisco de MSTP, un protocolo estándar IEEE que proporciona hasta 16 instancias de RSTP y combina muchas VLAN con la misma topología física y lógica en una instancia RSTP común. Cada instancia admite PortFast, BPDU guard, BPDU filter, root guard y loop guard. STP y RSTP asumen solo una instancia de árbol de expansión para toda la red puenteada, independientemente del número de VLAN. PVST+ proporciona una instancia de árbol de expansión 802.1D separada para cada VLAN que está configurada en la red."
        },
        {
            number: 54,
            text: "¿Cuál es el resultado de una tormenta de transmisión de Capa 2?",
            options: [
                "Los enrutadores se harán cargo del reenvío de marcos a medida que los interruptores se congestionen.",
                "El interruptor descarta el nuevo tráfico porque no se puede procesar.",
                "CSMA/CD hará que cada host continúe transmitiendo tramas.",
                "Las solicitudes de difusión de ARP se devuelven al host transmisor."
            ],
            answer: "El interruptor descarta el nuevo tráfico porque no se puede procesar.",
            explanation: "Cuando la red está saturada con tráfico de transmisión que está en bucle entre los conmutadores, cada conmutador descarta el tráfico nuevo porque no se puede procesar."
        },
        {
            number: 55,
            text: "¿Qué dos características de diseño de red requieren Spanning Tree Protocol (STP) para garantizar el correcto funcionamiento de la red? (Elige dos.)",
            options: [
                "rutas predeterminadas estáticas",
                "implementación de VLAN para contener transmisiones",
                "enlaces redundantes entre conmutadores de Capa 2",
                "enrutamiento dinámico de estado de enlace que proporciona rutas redundantes",
                "eliminación de puntos únicos de falla con múltiples interruptores de Capa 2"
            ],
            answer: ["enlaces redundantes entre conmutadores de Capa 2", "eliminación de puntos únicos de falla con múltiples interruptores de Capa 2"],
            explanation: "Spanning Tree Protocol (STP) es necesario para garantizar el correcto funcionamiento de la red al diseñar una red con múltiples conmutadores de Capa 2 interconectados o al usar enlaces redundantes para eliminar puntos únicos de falla entre los conmutadores de Capa 2. El enrutamiento es una función de Capa 3 y no se relaciona con STP. Las VLAN reducen el número de dominios de difusión, pero se relacionan con subredes de capa 3, no con STP."
        },
        {
            number: 56,
            text: "Un administrador de red ha configurado un EtherChannel entre dos conmutadores que están conectados a través de cuatro enlaces troncales. Si la interfaz física de uno de los enlaces troncales cambia a un estado descendente, ¿qué sucede con el EtherChannel?",
            options: [
                "Spanning Tree Protocol pasará la interfaz física fallida al modo de reenvío.",
                "Spanning Tree Protocol recalculará los enlaces troncales restantes.",
                "El EtherChannel hará la transición a un estado descendente.",
                "El EtherChannel seguirá siendo funcional."
            ],
            answer: "El EtherChannel seguirá siendo funcional.",
            explanation: "EtherChannel ofrece redundancia al agrupar múltiples enlaces troncales en una conexión lógica. El fracaso de un enlace físico dentro del EtherChannel no creará un cambio en la topología y, por lo tanto, un recálculo de Spanning Tree es innecesario. Solo un enlace físico debe permanecer operativo para que el EtherChannel continúe funcionando."
        },
        
            ];
     // Función para aleatorizar un array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
 // Función para renderizar preguntas
 const renderQuestions = (questionsToRender) => {
    questionsContainer.innerHTML = '';

    if (questionsToRender.length === 0) {
        questionsContainer.innerHTML = '<p class="no-results">No se encontraron preguntas que coincidan con tu búsqueda.</p>';
        return;
    }

    questionsToRender.forEach(question => {
        const questionEl = document.createElement('div');
        questionEl.className = 'question';
        questionEl.dataset.number = question.number;

        const optionsHtml = question.options.map((option, index) => `
            <div class="option">
                <input type="${Array.isArray(question.answer) ? 'checkbox' : 'radio'}" 
                       name="question-${question.number}" 
                       id="q${question.number}-opt${index}" 
                       value="${option}">
                <label for="q${question.number}-opt${index}">${option}</label>
            </div>
        `).join('');
        let imageHtml = '';
if (question.image) {
    if (Array.isArray(question.image)) {
        // Si es un array de imágenes, crea etiquetas <img> para cada una
        imageHtml = question.image.map(imgSrc => `<img src="${imgSrc}" alt="Imagen de la pregunta ${question.number}">`).join('');
    } else {
        // Si es una sola imagen (para compatibilidad con preguntas anteriores)
        imageHtml = `<img src="${question.image}" alt="Imagen de la pregunta ${question.number}">`;
    }
}

        questionEl.innerHTML = `
            <div class="question-header">
                <span class="question-number">Pregunta ${question.number}</span>
                <span class="question-status hidden"></span>
            </div>
            <div class="question-text">${question.text}</div>
            ${imageHtml}
            <div class="options">${optionsHtml}</div>
            <div class="question-footer">
                <button class="show-answer" data-question="${question.number}">
                    Mostrar Respuesta
                </button>
                <div class="answer hidden" id="answer-${question.number}">
                    <div class="answer-content">
                        <strong>Respuesta:</strong> 
                        ${Array.isArray(question.answer) ? question.answer.join(', ') : question.answer}
                    </div>
                    <div class="explanation">
                        <strong>Explicación:</strong> ${question.explanation}
                    </div>
                </div>
            </div>
        `;

        questionsContainer.appendChild(questionEl);
    });
};

// Event Delegation para manejar clics en respuestas
questionsContainer.addEventListener('click', (e) => {
    // Manejar botones de mostrar respuesta
    if (e.target.classList.contains('show-answer')) {
        const button = e.target;
        const questionNum = button.dataset.question;
        const answerEl = document.getElementById(`answer-${questionNum}`);

        answerEl.classList.toggle('hidden');
        button.textContent = answerEl.classList.contains('hidden')
            ? 'Mostrar Respuesta'
            : 'Ocultar Respuesta';
    }


        // Manejar selección de opciones
        if (e.target.tagName === 'INPUT') {
            const questionEl = e.target.closest('.question');
            const questionNum = questionEl.dataset.number;
            const question = questions.find(q => q.number === parseInt(questionNum));

            // Lógica de validación (ya la tenías)
            let isCorrect;
            if (Array.isArray(question.answer)) {
                const selectedOptions = Array.from(questionEl.querySelectorAll('input:checked')).map(input => input.value);
                isCorrect = selectedOptions.length === question.answer.length && selectedOptions.every(option => question.answer.includes(option));
            } else {
                const selectedOption = e.target.value;
                isCorrect = selectedOption === question.answer;
            }

            // Mostrar retroalimentación (Correcto/Incorrecto)
            const statusEl = questionEl.querySelector('.question-status');
            statusEl.textContent = isCorrect ? 'Correcto' : 'Incorrecto';
            statusEl.classList.remove('hidden');

            // Mostrar la explicación
            const answerEl = document.getElementById(`answer-${questionNum}`);
            console.log('Elemento answer:', answerEl); // Verifica el elemento
            if (answerEl) {
                console.log('Mostrando explicación'); // Verifica si se ejecuta esta línea
                console.log('Contenido de answer-content:', answerEl.querySelector('.answer-content').textContent); // Verifica el contenido
                console.log('Contenido de explanation:', answerEl.querySelector('.explanation').textContent); // Verifica el contenido

                answerEl.classList.remove('hidden');
                questionEl.querySelector('.show-answer').textContent = 'Ocultar Respuesta';

                // Intenta forzar una actualización del DOM
                setTimeout(() => {
                    answerEl.style.display = 'block'; // Asegura que se muestre
                }, 100);
            } else {
                console.log('Elemento answer no encontrado'); // Verifica si se ejecuta esta línea
            }
        }
    });


// Función de búsqueda
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();
    const filteredQuestions = searchTerm
        ? questions.filter(question =>
            question.text.toLowerCase().includes(searchTerm) ||
            (question.explanation || '').toLowerCase().includes(searchTerm) || // Corrección aquí
            question.options.some(opt => opt.toLowerCase().includes(searchTerm)) ||
            question.number.toString().includes(searchTerm)
        )
        : questions;

    renderQuestions(filteredQuestions);
});

// Control para mostrar/ocultar todas las respuestas
toggleAnswersBtn.addEventListener('click', function() {
    const allAnswers = document.querySelectorAll('.answer');
    const isHidden = allAnswers.length > 0
        ? allAnswers[0].classList.contains('hidden')
        : true;

    allAnswers.forEach(answer => answer.classList.toggle('hidden', !isHidden));

    document.querySelectorAll('.show-answer').forEach(button => {
        button.textContent = isHidden ? 'Ocultar Respuesta' : 'Mostrar Respuesta';
    });

    this.textContent = isHidden ? 'Ocultar Todas las Respuestas' : 'Mostrar Todas las Respuestas';
});
// Inicialización: Aleatorizar las preguntas antes de renderizarlas
const shuffledQuestions = shuffleArray([...questions]);
renderQuestions(shuffledQuestions);
// Inicialización

});