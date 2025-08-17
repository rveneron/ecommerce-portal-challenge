import { IProduct } from '@/interfaces/product';
import { categories } from '@/constants/categories';

export const allProducts: IProduct[] = [
  {
    _id: '2fb7724b-00bc-4ea7-9ff7-6903473ba1dc',
    name: 'Luvit Ampolla inyectable',
    slug: 'luvit-ampolla-inyectable',
    description: 'Suplemento inyectable con vitaminas B1, B6 y B12, ideal para tratar deficiencias neurológicas, fatiga y dolor muscular. Contiene lidocaína para alivio local.',
    content: `<section>
  <h1>Luvit® B Forte - Ampolla Inyectable</h1>

  <p><strong>Presentación:</strong> Ampolla de 2 ml para administración intramuscular profunda.</p>

  <p><strong>Composición por ampolla:</strong></p>
  <ul>
    <li>Vitamina B1 (Tiamina Clorhidrato): 100 mg</li>
    <li>Vitamina B6 (Piridoxina Clorhidrato): 50 mg</li>
    <li>Vitamina B12 (Cianocobalamina): 10,000 mcg</li>
    <li>Lidocaína Clorhidrato: 30 mg</li>
  </ul>

  <p><strong>Indicaciones terapéuticas:</strong></p>
  <ul>
    <li>Tratamiento y prevención de deficiencias de vitaminas B1, B6 y B12.</li>
    <li>Neuritis y polineuritis agudas y crónicas.</li>
    <li>Neuralgias periféricas, faciales y del trigémino.</li>
    <li>Lumbalgia, ciatalgia, dolor post-herpético y post-amputación.</li>
    <li>Anemia perniciosa.</li>
    <li>Estados de agotamiento físico y nervioso.</li>
    <li>Durante embarazo, lactancia, crecimiento y uso de ciertos medicamentos como isoniazida, penicilamina y anticonceptivos orales.</li>
  </ul>

  <p><strong>Posología:</strong></p>
  <ul>
    <li>Casos leves: 1 ampolla IM profunda, 2–3 veces por semana.</li>
    <li>Casos graves: 1 ampolla diaria IM profunda hasta remisión de síntomas.</li>
    <li>Fase de mantenimiento: 1 ampolla IM profunda, 2–3 veces por semana.</li>
    <li>En días sin inyección: 1–2 comprimidos tres veces al día.</li>
  </ul>

  <p><strong>Contraindicaciones:</strong> Hipersensibilidad a cualquiera de los componentes. No administrar por vía intravenosa.</p>

  <p><strong>Reacciones adversas:</strong></p>
  <ul>
    <li>Reacciones cutáneas: urticaria, eritema, prurito, descamación.</li>
    <li>Gastrointestinales: náuseas, vómitos, anorexia.</li>
    <li>Neurológicas: cefalea.</li>
  </ul>

  <p><strong>Interacciones medicamentosas:</strong></p>
  <ul>
    <li>La piridoxina puede reducir el efecto de la levodopa.</li>
    <li>Fármacos como isoniazida, penicilamina y anticonceptivos orales aumentan los requerimientos de vitamina B6.</li>
    <li>La lidocaína puede potenciar efectos depresores cardíacos si se combina con betabloqueadores, fenitoína u otros antiarrítmicos.</li>
  </ul>

  <p><strong>Precauciones:</strong></p>
  <ul>
    <li>Contiene lidocaína: no administrar por vía intravenosa.</li>
    <li>Suspender el tratamiento ante signos de intolerancia a la tiamina.</li>
    <li>Conservar a temperatura no mayor a 30°C.</li>
  </ul>

  <p><strong>Advertencias:</strong> Uso bajo supervisión médica. No exceder la dosis recomendada.</p>
</section>`,
    price: 1.5,
    image: {
      url: '/images/mockup/products/card/luvit-ampolla-inyectable.webp',
      thumb: '/images/mockup/products/card/luvit-ampolla-inyectable.webp',
      width: 276,
      height: 240
    },
    rate: {
      rate: 4,
      count: 20
    },
    category: categories[0],
    createdAt: '2025-01-01T00:00:00.000Z'
  },
  {
    _id: '7bc23c78-c229-4fd8-bbbe-87c08cca9b7c',
    name: 'Vitamina B, Nicotinamida',
    slug: 'vitamina-b-nicotinamida',
    description: 'Vitamina esencial para el metabolismo celular, la salud de la piel y el sistema nervioso. Indicada en casos de pelagra, acné y deficiencias nutricionales',
    content: `<section>
  <h1>Vitamina B3 - Nicotinamida</h1>

  <p><strong>Nombre químico:</strong> Nicotinamida (también conocida como niacinamida)</p>

  <p><strong>Presentación:</strong> Tabletas, cápsulas, soluciones inyectables y tópicos dermatológicos.</p>

  <p><strong>Composición:</strong> Nicotinamida pura, una amida del ácido nicotínico, parte del complejo de vitamina B.</p>

  <p><strong>Propiedades:</strong></p>
  <ul>
    <li>Vitamina hidrosoluble esencial para el metabolismo celular.</li>
    <li>Forma parte de coenzimas como NAD+ y NADP+, fundamentales para la producción de energía.</li>
    <li>Posee propiedades antioxidantes y antiinflamatorias.</li>
  </ul>

  <p><strong>Indicaciones terapéuticas:</strong></p>
  <ul>
    <li>Prevención y tratamiento de la pelagra (deficiencia de vitamina B3).</li>
    <li>Apoyo en el tratamiento de acné, rosácea e hiperpigmentación.</li>
    <li>Mejora de la función cognitiva y del sistema nervioso.</li>
    <li>Fortalecimiento de la barrera cutánea y reducción de inflamación dérmica.</li>
    <li>Uso como coadyuvante en enfermedades metabólicas y degenerativas.</li>
  </ul>

  <p><strong>Posología:</strong></p>
  <ul>
    <li>Adultos: 15–30 mg diarios en casos de deficiencia leve.</li>
    <li>Pelagra: 100–500 mg diarios divididos en varias dosis.</li>
    <li>Uso dermatológico: aplicación tópica una o dos veces al día según indicación médica.</li>
  </ul>

  <p><strong>Contraindicaciones:</strong> Hipersensibilidad a la nicotinamida o a derivados de la niacina.</p>

  <p><strong>Reacciones adversas:</strong></p>
  <ul>
    <li>En dosis altas: náuseas, vómitos, dolor abdominal.</li>
    <li>Alteraciones hepáticas en tratamientos prolongados.</li>
    <li>Erupciones cutáneas o irritación local en uso tópico.</li>
  </ul>

  <p><strong>Interacciones medicamentosas:</strong></p>
  <ul>
    <li>Puede potenciar el efecto de medicamentos hipoglucemiantes.</li>
    <li>Interacción con anticoagulantes y anticonvulsivos.</li>
    <li>Evitar combinación con altas dosis de otros suplementos del complejo B sin supervisión médica.</li>
  </ul>

  <p><strong>Precauciones:</strong></p>
  <ul>
    <li>Uso bajo supervisión médica en pacientes con enfermedad hepática.</li>
    <li>Segura durante el embarazo en dosis recomendadas.</li>
    <li>Conservar en lugar fresco y seco, lejos de la luz directa.</li>
  </ul>

  <p><strong>Advertencias:</strong> No exceder la dosis recomendada. Evitar la automedicación. Consultar al médico ante cualquier síntoma adverso.</p>
</section>`,
    price: 25.5,
    image: {
      url: '/images/mockup/products/card/vitamina-b-nicotinamida.webp',
      thumb: '/images/mockup/products/card/vitamina-b-nicotinamida.webp',
      width: 276,
      height: 240
    },
    rate: {
      rate: 3,
      count: 20
    },
    category: categories[0],
    createdAt: '2025-05-01T00:00:00.000Z'
  },
  {
    _id: 'aeee5abb-e05f-467a-bd98-933963501b26',
    name: 'Neurobion',
    slug: 'neurobion',
    description: 'Complejo vitamínico B1, B6 y B12 en tabletas o ampollas, formulado para aliviar neuritis, neuralgias y fortalecer el sistema nervioso periférico.',
    content: `<section>
  <h1>Neurobion® - Suplemento Multivitamínico</h1>

  <p><strong>Presentación:</strong> Tabletas recubiertas, cápsulas y ampollas inyectables.</p>

  <p><strong>Composición por unidad:</strong></p>
  <ul>
    <li>Vitamina B1 (Tiamina mononitrato): 100 mg</li>
    <li>Vitamina B6 (Piridoxina clorhidrato): 5 mg</li>
    <li>Vitamina B12 (Cianocobalamina): 50 μg</li>
  </ul>

  <p><strong>Propiedades farmacológicas:</strong></p>
  <ul>
    <li>Contribuye al metabolismo energético celular.</li>
    <li>Apoya la función neuromuscular y la regeneración de nervios periféricos.</li>
    <li>Actúa como coadyuvante en procesos inflamatorios y dolorosos del sistema nervioso.</li>
  </ul>

  <p><strong>Indicaciones terapéuticas:</strong></p>
  <ul>
    <li>Tratamiento de deficiencias de vitaminas B1, B6 y B12.</li>
    <li>Neuritis y neuralgias periféricas.</li>
    <li>Dolores musculares, calambres, hormigueo y debilidad nerviosa.</li>
    <li>Apoyo en casos de reumatismo, artritis, espondiloartrosis y espondilitis.</li>
    <li>Prevención de neuropatías inducidas por diabetes o consumo prolongado de alcohol.</li>
    <li>Estados de agotamiento físico o mental.</li>
  </ul>

  <p><strong>Posología:</strong></p>
  <ul>
    <li>Tabletas: 1 comprimido al día, según indicación médica.</li>
    <li>Ampollas: 1 inyección intramuscular profunda, frecuencia determinada por el médico.</li>
  </ul>

  <p><strong>Contraindicaciones:</strong> Hipersensibilidad a cualquiera de los componentes. No administrar por vía intravenosa.</p>

  <p><strong>Reacciones adversas:</strong></p>
  <ul>
    <li>Diarrea</li>
    <li>Micción excesiva</li>
    <li>Palpitaciones</li>
    <li>Problemas digestivos</li>
    <li>Reacciones alérgicas cutáneas</li>
    <li>Daño nervioso en casos de sobredosis prolongada</li>
  </ul>

  <p><strong>Interacciones medicamentosas:</strong></p>
  <ul>
    <li>La piridoxina puede reducir el efecto de la levodopa.</li>
    <li>Precaución con medicamentos anticoagulantes, anticonvulsivos y otros suplementos vitamínicos.</li>
  </ul>

  <p><strong>Precauciones:</strong></p>
  <ul>
    <li>Consultar al médico en caso de enfermedades hepáticas, renales o cardiovasculares.</li>
    <li>Evitar el uso prolongado sin supervisión médica.</li>
    <li>Conservar en lugar fresco y seco, protegido de la luz.</li>
  </ul>

  <p><strong>Advertencias:</strong> No exceder la dosis recomendada. Uso bajo prescripción médica. No duplicar dosis en caso de olvido.</p>
</section>`,
    price: 25.5,
    image: {
      url: '/images/mockup/products/card/neurobion.webp',
      thumb: '/images/mockup/products/card/neurobion.webp',
      width: 276,
      height: 240
    },
    rate: {
      rate: 5,
      count: 20
    },
    category: categories[0],
    createdAt: '2025-04-20T00:00:00.000Z'
  },
  {
    _id: '2c322065-97c6-4364-ad4b-0424e0b3fafc',
    name: 'Gerber Gom Mast',
    slug: 'gerber-gom-mast',
    description: 'Gomitas infantiles con DHA, vitaminas y minerales que apoyan el desarrollo cognitivo, inmunológico y físico en niños en etapa de crecimiento.',
    content: `<section>
  <h1>Gerber Gom Mast - Suplemento Infantil</h1>

  <p><strong>Presentación:</strong> Envase de 180 gramos con 60 gomitas masticables.</p>

  <p><strong>Forma farmacéutica:</strong> Gomitas masticables saborizadas, diseñadas para niños.</p>

  <p><strong>Composición por porción:</strong></p>
  <ul>
    <li>Ácido docosahexaenoico (DHA)</li>
    <li>Ácido eicosapentaenoico (EPA)</li>
    <li>Vitaminas del complejo B</li>
    <li>Vitamina D</li>
    <li>Yodo</li>
    <li>Colina</li>
  </ul>

  <p><strong>Propiedades:</strong></p>
  <ul>
    <li>Apoya el desarrollo cerebral y cognitivo en niños.</li>
    <li>Contribuye al funcionamiento normal del sistema nervioso.</li>
    <li>Fortalece el sistema inmunológico.</li>
    <li>Favorece la salud visual y el crecimiento físico.</li>
  </ul>

  <p><strong>Indicaciones:</strong></p>
  <ul>
    <li>Suplemento nutricional para niños en etapa de crecimiento.</li>
    <li>Apoyo en el desarrollo de funciones cognitivas y motoras.</li>
    <li>Complemento en dietas con deficiencia de ácidos grasos esenciales y micronutrientes.</li>
  </ul>

  <p><strong>Posología:</strong></p>
  <ul>
    <li>Niños mayores de 2 años: 1 a 2 gomitas al día, preferiblemente con alimentos.</li>
    <li>Consultar al pediatra para ajustar la dosis según edad y necesidades específicas.</li>
  </ul>

  <p><strong>Contraindicaciones:</strong> Hipersensibilidad a alguno de los componentes. No recomendado en menores de 2 años sin supervisión médica.</p>

  <p><strong>Reacciones adversas:</strong></p>
  <ul>
    <li>Raras: molestias gastrointestinales leves como gases o distensión abdominal.</li>
    <li>Muy raras: reacciones alérgicas cutáneas.</li>
  </ul>

  <p><strong>Interacciones:</strong></p>
  <ul>
    <li>No se conocen interacciones significativas con medicamentos comunes.</li>
    <li>Evitar el uso simultáneo con otros suplementos que contengan los mismos ingredientes para prevenir sobredosificación.</li>
  </ul>

  <p><strong>Precauciones:</strong></p>
  <ul>
    <li>Conservar en lugar fresco y seco, fuera del alcance de los niños.</li>
    <li>No exceder la dosis recomendada.</li>
    <li>Uso bajo supervisión médica en niños con condiciones metabólicas o alérgicas.</li>
  </ul>

  <p><strong>Advertencias:</strong> Este producto no sustituye una alimentación equilibrada. No usar como único aporte nutricional.</p>
</section>`,
    price: 25.5,
    image: {
      url: '/images/mockup/products/card/gerber-gom.webp',
      thumb: '/images/mockup/products/card/gerber-gom.webp',
      width: 276,
      height: 240
    },
    rate: {
      rate: 5,
      count: 20
    },
    category: categories[0],
    createdAt: '2025-04-25T00:00:00.000Z'
  },
  {
    _id: '4607e5c9-5cea-4987-9d65-f83d8d9251f3',
    name: 'Neuressens',
    slug: 'neuressens',
    description: 'Suplemento líquido neuroactivo con vitaminas B1, B6 y B12 en forma activa. Favorece la función neuromuscular, la energía celular y la salud cognitiva.',
    content: `<section>
  <h1>Neuressens® - Suplemento Neuroactivo Líquido</h1>

  <p><strong>Presentación:</strong> Frasco de 30 mL con gotero dosificador de 1 mL. Sabor natural a menta.</p>

  <p><strong>Forma farmacéutica:</strong> Solución líquida altamente concentrada, de origen 100% vegano.</p>

  <p><strong>Composición por dosis (1 mL):</strong></p>
  <ul>
    <li>Metilcobalamina (Vitamina B12 activa)</li>
    <li>Adenosilcobalamina (Vitamina B12 activa)</li>
    <li>Piridoxal-5-fosfato (Vitamina B6 activa)</li>
    <li>Clorhidrato de Tiamina (Vitamina B1)</li>
    <li>Excipientes y sabor natural de menta</li>
  </ul>

  <p><strong>Propiedades funcionales:</strong></p>
  <ul>
    <li>Participa en la síntesis de ADN y en la regeneración de metionina a partir de homocisteína.</li>
    <li>Apoya el metabolismo energético celular a través del ciclo de Krebs.</li>
    <li>Contribuye a la degradación de aminoácidos, ácidos grasos y colesterol.</li>
    <li>Favorece la desintoxicación celular y la transcripción genética.</li>
    <li>Interviene en la contracción muscular y la conducción nerviosa.</li>
    <li>Actúa como cofactor en enzimas clave del sistema nervioso y muscular.</li>
  </ul>

  <p><strong>Indicaciones:</strong></p>
  <ul>
    <li>Apoyo nutricional en casos de fatiga neuromuscular y estrés oxidativo.</li>
    <li>Deficiencias de vitaminas B1, B6 y B12 en sus formas activas.</li>
    <li>Complemento en terapias de medicina funcional y regenerativa.</li>
    <li>Prevención de neuropatías periféricas y deterioro cognitivo.</li>
  </ul>

  <p><strong>Modo de uso:</strong></p>
  <ul>
    <li>Adultos: medio gotero (0.5 mL) una vez al día, o según criterio médico.</li>
    <li>Niños mayores de 2 años: 1/4 de gotero (0.25 mL) al día.</li>
  </ul>

  <p><strong>Contraindicaciones:</strong></p>
  <ul>
    <li>No consumir durante el embarazo o la lactancia.</li>
    <li>Hipersensibilidad a alguno de los componentes.</li>
  </ul>

  <p><strong>Reacciones adversas:</strong></p>
  <ul>
    <li>Casos aislados de hipersensibilidad cutánea.</li>
    <li>Molestias digestivas leves en personas sensibles.</li>
  </ul>

  <p><strong>Precauciones:</strong></p>
  <ul>
    <li>Este producto es un suplemento dietario, no es un medicamento.</li>
    <li>No sustituye una alimentación equilibrada.</li>
    <li>Mantener fuera del alcance de los niños.</li>
    <li>Conservar en lugar fresco y seco, protegido de la luz.</li>
  </ul>

  <p><strong>Advertencias:</strong> Uso bajo supervisión médica. No exceder la dosis recomendada.</p>
</section>`,
    price: 10,
    image: {
      url: '/images/mockup/products/card/neuressens.webp',
      thumb: '/images/mockup/products/card/neuressens.webp',
      width: 276,
      height: 240
    },
    rate: {
      rate: 5,
      count: 20
    },
    category: categories[0],
    createdAt: '2025-04-25T00:00:00.000Z'
  },
  {
    _id: '0687dd8e-1dc0-449f-b025-d28d84318eca',
    name: 'Mentol chino 500g',
    slug: 'mentol-chino-500g',
    description: 'Pomada tópica refrescante con mentol y alcanfor. Alivia dolores musculares, congestión nasal y picaduras. Ideal para uso externo en zonas localizadas.',
    content: `<section>
  <h1>Mentol Chino - Presentación de 500g</h1>

  <p><strong>Presentación:</strong> Envase de 500 gramos en formato de ungüento tópico.</p>

  <p><strong>Forma farmacéutica:</strong> Pomada semisólida de uso externo, con aroma característico a menta.</p>

  <p><strong>Composición principal:</strong></p>
  <ul>
    <li>Mentol natural derivado de la menta</li>
    <li>Alcanfor</li>
    <li>Aceites esenciales</li>
    <li>Base emoliente y estabilizante</li>
  </ul>

  <p><strong>Propiedades terapéuticas:</strong></p>
  <ul>
    <li>Refrescante y calmante</li>
    <li>Analgésico local</li>
    <li>Antipruriginoso (alivia picazón)</li>
    <li>Descongestionante nasal</li>
    <li>Antiinflamatorio leve</li>
  </ul>

  <p><strong>Indicaciones:</strong></p>
  <ul>
    <li>Alivio de dolores musculares y articulares</li>
    <li>Torceduras, contusiones y calambres</li>
    <li>Picaduras de insectos</li>
    <li>Congestión nasal y tos</li>
    <li>Irritación de garganta (uso externo)</li>
    <li>Aplicación post-esfuerzo físico</li>
    <li>Uso ocasional como estimulante sensorial en contextos íntimos</li>
  </ul>

  <p><strong>Modo de uso:</strong></p>
  <ul>
    <li>Aplicar una pequeña cantidad sobre la zona afectada, realizando un suave masaje.</li>
    <li>Puede repetirse 2 a 3 veces al día según necesidad.</li>
    <li>No aplicar sobre heridas abiertas ni mucosas internas.</li>
  </ul>

  <p><strong>Contraindicaciones:</strong></p>
  <ul>
    <li>Hipersensibilidad al mentol, alcanfor u otros componentes.</li>
    <li>No usar en menores de 2 años.</li>
    <li>Evitar contacto con ojos y mucosas.</li>
  </ul>

  <p><strong>Reacciones adversas:</strong></p>
  <ul>
    <li>Enrojecimiento o irritación local</li>
    <li>Sensación de ardor o picor leve</li>
    <li>Reacciones alérgicas cutáneas en personas sensibles</li>
  </ul>

  <p><strong>Precauciones:</strong></p>
  <ul>
    <li>Uso exclusivamente externo</li>
    <li>Conservar en lugar fresco y seco, lejos de la luz directa</li>
    <li>Mantener fuera del alcance de los niños</li>
  </ul>

  <p><strong>Advertencias:</strong> No sustituye tratamiento médico. Consultar al profesional de salud si los síntomas persisten.</p>
</section>`,
    price: 20,
    image: {
      url: '/images/mockup/products/card/mentol-chino-500g.webp',
      thumb: '/images/mockup/products/card/mentol-chino-500g.webp',
      width: 276,
      height: 240
    },
    rate: {
      rate: 5,
      count: 40
    },
    category: categories[1],
    createdAt: '2025-08-10T00:00:00.000Z'
  },
  {
    _id: 'ab0e884b-7a29-4f92-9b89-dd3e4e722126',
    name: 'Medox ABC Jarabe',
    slug: 'medox-abc-jarabe',
    description: 'Jarabe multivitamínico con vitaminas A, D, complejo B, hierro y calcio. Estimula el apetito, fortalece el sistema inmunológico y combate la anemia infantil.',
    content: `<section>
  <h1>Medox ABC® Jarabe - Suplemento Multivitamínico Infantil</h1>

  <p><strong>Presentación:</strong> Frasco con dosificador, disponible en formatos de 120 mL y 240 mL.</p>

  <p><strong>Forma farmacéutica:</strong> Jarabe oral saborizado, diseñado para niños y adultos.</p>

  <p><strong>Composición por cada 100 mL:</strong></p>
  <ul>
    <li>Vitamina A palmitato: 30,000 UI</li>
    <li>Vitamina D3 (Colecalciferol): 4,000 UI</li>
    <li>Vitamina B1 (Tiamina clorhidrato): 100 mg</li>
    <li>Vitamina B2 (Riboflavina 5-fosfato de sodio): 60 mg</li>
    <li>Vitamina B6 (Piridoxina clorhidrato): 30 mg</li>
    <li>Vitamina B12 (Cianocobalamina): 100 mcg</li>
    <li>Nicotinamida (Vitamina B3): 60 mg</li>
    <li>Pantenol: 50 mg</li>
    <li>Cloruro de calcio dihidrato: 390 mg de calcio elemental</li>
    <li>Hierro aminoquelado: 30 mg de hierro elemental</li>
    <li>L-Lisina Monoclorhidrato: 2,000 mg</li>
  </ul>

  <p><strong>Propiedades:</strong></p>
  <ul>
    <li>Estimula el apetito y mejora el estado nutricional.</li>
    <li>Apoya el desarrollo físico y neurológico en etapas de crecimiento.</li>
    <li>Contribuye a la formación de glóbulos rojos y al metabolismo energético.</li>
    <li>Fortalece el sistema inmunológico y la salud ósea.</li>
    <li>Actúa como reconstituyente durante convalecencias o estados de debilidad.</li>
  </ul>

  <p><strong>Indicaciones:</strong></p>
  <ul>
    <li>Deficiencia de vitaminas y minerales esenciales.</li>
    <li>Falta de apetito, debilidad general, fatiga.</li>
    <li>Convalecencia postoperatoria o post-enfermedad.</li>
    <li>Apoyo nutricional durante embarazo, lactancia, infancia y senectud.</li>
    <li>Prevención de anemia y trastornos neuromusculares asociados a deficiencia de complejo B.</li>
  </ul>

  <p><strong>Modo de uso:</strong></p>
  <ul>
    <li>Niños: 5 mL una o dos veces al día, según recomendación médica.</li>
    <li>Adultos: 10 mL una vez al día o según indicación profesional.</li>
  </ul>

  <p><strong>Contraindicaciones:</strong></p>
  <ul>
    <li>Hipersensibilidad a alguno de los componentes.</li>
    <li>Pacientes con hipervitaminosis A o D.</li>
  </ul>

  <p><strong>Reacciones adversas:</strong></p>
  <ul>
    <li>Molestias gastrointestinales leves como náuseas o diarrea.</li>
    <li>Reacciones alérgicas cutáneas en personas sensibles.</li>
    <li>En casos de sobredosis prolongada: hipervitaminosis, irritabilidad, cefalea.</li>
  </ul>

  <p><strong>Interacciones:</strong></p>
  <ul>
    <li>Evitar el uso simultáneo con otros suplementos que contengan vitaminas A o D en altas dosis.</li>
    <li>La piridoxina puede interferir con levodopa si no se administra con carbidopa.</li>
  </ul>

  <p><strong>Precauciones:</strong></p>
  <ul>
    <li>Uso bajo supervisión médica en pacientes con enfermedades hepáticas o renales.</li>
    <li>Conservar en lugar fresco y seco, protegido de la luz.</li>
    <li>Mantener fuera del alcance de los niños.</li>
  </ul>

  <p><strong>Advertencias:</strong> No exceder la dosis recomendada. Este producto es un suplemento dietario, no sustituye una alimentación equilibrada ni tratamientos médicos.</p>
</section>`,
    price: 20,
    image: {
      url: '/images/mockup/products/card/medox-abc-jarabe.webp',
      thumb: '/images/mockup/products/card/medox-abc-jarabe.webp',
      width: 276,
      height: 240
    },
    rate: {
      rate: 5,
      count: 40
    },
    category: categories[3],
    createdAt: '2025-08-08T00:00:00.000Z'
  },
  {
    _id: 'bd21f19c-aa6b-4978-b0e4-f54b83423f8b',
    name: 'Dominal, Paracetamol 500g',
    slug: 'dominal-paracetamol-500g',
    description: 'Tabletas analgésicas con paracetamol 500 mg y cafeína 65 mg. Alivio rápido de dolores de cabeza, musculares y fiebre. Ideal para adultos activos',
    content: `<section>
  <h1>Dominal® - Tabletas de Paracetamol 500 mg con Cafeína 65 mg</h1>

  <p><strong>Presentación:</strong> Caja con 24 o 60 tabletas recubiertas.</p>

  <p><strong>Forma farmacéutica:</strong> Tabletas orales de liberación rápida.</p>

  <p><strong>Composición por tableta:</strong></p>
  <ul>
    <li>Paracetamol (Acetaminofén): 500 mg</li>
    <li>Cafeína: 65 mg</li>
    <li>Excipientes: almidón pregelatinizado, croscarmelosa, celulosa microcristalina PH101, estearato de magnesio</li>
    <li>Recubrimiento: Opadry naranja, alcohol etílico (evaporado durante manufactura)</li>
  </ul>

  <p><strong>Propiedades:</strong></p>
  <ul>
    <li>Paracetamol: analgésico y antipirético</li>
    <li>Cafeína: estimulante que potencia el efecto analgésico del paracetamol</li>
    <li>Alivio rápido de dolores leves a moderados</li>
  </ul>

  <p><strong>Indicaciones:</strong></p>
  <ul>
    <li>Dolor de cabeza y migraña</li>
    <li>Dolores musculares y articulares</li>
    <li>Dolor dental</li>
    <li>Dolor menstrual</li>
    <li>Estados febriles</li>
    <li>Malestar general asociado a resaca</li>
  </ul>

  <p><strong>Modo de uso:</strong></p>
  <ul>
    <li>Adultos y mayores de 12 años: 1 tableta cada 6 a 8 horas</li>
    <li>Si el dolor persiste, puede tomar 2 tabletas en la siguiente dosis</li>
    <li>No exceder 8 tabletas en 24 horas</li>
    <li>No usar por más de 5 días consecutivos sin indicación médica</li>
  </ul>

  <p><strong>Contraindicaciones:</strong></p>
  <ul>
    <li>Hipersensibilidad a paracetamol, cafeína o cualquier componente de la fórmula</li>
    <li>Insuficiencia hepática o renal grave</li>
    <li>Menores de 12 años</li>
  </ul>

  <p><strong>Reacciones adversas:</strong></p>
  <ul>
    <li>Nerviosismo, insomnio, taquicardia (por cafeína)</li>
    <li>Náuseas, molestias digestivas</li>
    <li>Reacciones alérgicas cutáneas</li>
    <li>En sobredosis: daño hepático grave</li>
  </ul>

  <p><strong>Interacciones:</strong></p>
  <ul>
    <li>Evitar otros productos con cafeína (café, té, bebidas energéticas)</li>
    <li>Evitar alcohol durante el tratamiento (riesgo de toxicidad hepática)</li>
    <li>Consultar al médico si se toman anticoagulantes, anticonvulsivos o medicamentos hepatotóxicos</li>
  </ul>

  <p><strong>Precauciones:</strong></p>
  <ul>
    <li>Uso bajo supervisión médica en pacientes con enfermedades hepáticas o renales</li>
    <li>Conservar en lugar fresco, seco y protegido de la luz</li>
    <li>No usar después de la fecha de vencimiento</li>
    <li>Mantener fuera del alcance de los niños</li>
  </ul>

  <p><strong>Advertencias:</strong> No exceder la dosis recomendada. En caso de sobredosis, acudir inmediatamente al centro de salud más cercano.</p>
</section>`,
    price: 20,
    image: {
      url: '/images/mockup/products/card/dominal-paracetamol-500g.webp',
      thumb: '/images/mockup/products/card/dominal-paracetamol-500g.webp',
      width: 276,
      height: 240
    },
    rate: {
      rate: 5,
      count: 40
    },
    category: categories[6],
    createdAt: '2025-05-08T00:00:00.000Z'
  },
  {
    _id: '1eb3b567-5bf6-4c5c-a0a6-ba9e8cc7341a',
    name: 'Diflox',
    slug: 'diflox',
    description: 'Antiinflamatorio no esteroideo en gel o suspensión oral. Reduce dolor e inflamación en músculos y articulaciones. Uso tópico o sistémico según presentación.',
    content: `Diflox`,
    price: 20,
    image: {
      url: '/images/mockup/products/card/diflox.webp',
      thumb: '/images/mockup/products/card/diflox.webp',
      width: 276,
      height: 240
    },
    rate: {
      rate: 5,
      count: 40
    },
    category: categories[2],
    createdAt: '2025-05-01T00:00:00.000Z'
  },
  {
    _id: 'ca74a9fd-8229-467b-884a-df1ca36e7398',
    name: 'Analgan Rapid Paracetamol',
    slug: 'analgan-rapid-paracetamol',
    description: 'Cápsulas blandas de paracetamol 500 mg de liberación rápida. Alivio eficaz de dolores leves a moderados y estados febriles. Acción rápida y segura.',
    content: `<section>
  <h1>Analgan Rapid® - Cápsulas Blandas de Paracetamol 500 mg</h1>

  <p><strong>Presentación:</strong> Caja con 1, 3 o 5 blísteres de 10 cápsulas blandas cada uno.</p>

  <p><strong>Forma farmacéutica:</strong> Cápsula blanda de color rojo, forma oblonga, que contiene una suspensión viscosa blanca, libre de partículas extrañas.</p>

  <p><strong>Composición por cápsula:</strong></p>
  <ul>
    <li>Paracetamol (Acetaminofén): 500 mg</li>
    <li>Excipientes: formulación no especificada, diseñada para liberación rápida</li>
  </ul>

  <p><strong>Propiedades farmacológicas:</strong></p>
  <ul>
    <li>Analgésico: alivia el dolor leve a moderado</li>
    <li>Antipirético: reduce la fiebre</li>
    <li>No posee efecto antiinflamatorio significativo</li>
    <li>Baja unión a proteínas plasmáticas (10–25%)</li>
  </ul>

  <p><strong>Indicaciones terapéuticas:</strong></p>
  <ul>
    <li>Dolor de cabeza</li>
    <li>Dolor dental</li>
    <li>Dolores musculares y articulares</li>
    <li>Dolor menstrual</li>
    <li>Fiebre de origen viral o bacteriano</li>
    <li>Malestar general</li>
  </ul>

  <p><strong>Modo de uso:</strong></p>
  <ul>
    <li>Adultos y mayores de 12 años: 1 cápsula cada 6 a 8 horas</li>
    <li>No exceder 4 gramos (8 cápsulas) en 24 horas</li>
    <li>Uso oral, con agua. No masticar ni abrir la cápsula</li>
  </ul>

  <p><strong>Contraindicaciones:</strong></p>
  <ul>
    <li>Hipersensibilidad al paracetamol</li>
    <li>Insuficiencia hepática grave</li>
    <li>Alcoholismo crónico</li>
  </ul>

  <p><strong>Reacciones adversas:</strong></p>
  <ul>
    <li>Raras: erupciones cutáneas, urticaria</li>
    <li>Muy raras: daño hepático por sobredosis</li>
    <li>Molestias digestivas leves</li>
  </ul>

  <p><strong>Interacciones medicamentosas:</strong></p>
  <ul>
    <li>Evitar el consumo simultáneo de alcohol</li>
    <li>Precaución con anticoagulantes, anticonvulsivos y otros hepatotóxicos</li>
    <li>Consultar al médico si se toman otros productos con paracetamol</li>
  </ul>

  <p><strong>Precauciones:</strong></p>
  <ul>
    <li>Uso bajo supervisión médica en pacientes con enfermedades hepáticas</li>
    <li>Conservar a temperatura no mayor a 30°C</li>
    <li>Mantener fuera del alcance de los niños</li>
  </ul>

  <p><strong>Advertencias:</strong> No exceder la dosis recomendada. En caso de sobredosis, acudir inmediatamente al centro médico más cercano.</p>
</section>`,
    price: 20,
    image: {
      url: '/images/mockup/products/card/analgan-rapid-paracetamol.webp',
      thumb: '/images/mockup/products/card/analgan-rapid-paracetamol.webp',
      width: 276,
      height: 240
    },
    rate: {
      rate: 5,
      count: 40
    },
    category: categories[6],
    createdAt: '2025-01-20T00:00:00.000Z'
  }
];

export const mostSellProducts: IProduct[] = [...allProducts.slice(5, 10), ...allProducts.slice(0, 5)];

export const recentProducts: IProduct[] = [...allProducts.slice(5, 9), ...allProducts.slice(0, 4)];

export const recommendedProducts: IProduct[] = allProducts.slice(0, 10);

export const saveProducts: IProduct[] = [
  {
    _id: '8cdd4cf9-718b-41ba-b93e-df93696afe91',
    name: 'Producto 1',
    slug: 'producto-1',
    description: 'Lorem ipsum dolor sit...',
    content: '',
    price: 20.99,
    image: {
      url: '/images/mockup/products/small/producto-1.webp',
      thumb: '/images/mockup/products/small/producto-1.webp',
      width: 100,
      height: 100
    },
    category: categories[0],
    createdAt: '2025-01-01T00:00:00.000Z'
  },
  {
    _id: 'cedad4df-52f7-4236-ad29-f58b518f2793',
    name: 'Producto 2',
    slug: 'producto-2',
    description: 'Lorem ipsum dolor sit...',
    content: '',
    price: 10.99,
    image: {
      url: '/images/mockup/products/small/producto-2.webp',
      thumb: '/images/mockup/products/small/producto-2.webp',
      width: 100,
      height: 100
    },
    category: categories[0],
    createdAt: '2025-03-05T00:00:00.000Z'
  },
  {
    _id: '8e88e551-6de9-491f-a6d0-5a1a260d2544',
    name: 'Producto 3',
    slug: 'producto-3',
    description: 'Lorem ipsum dolor sit...',
    content: '',
    price: 12.5,
    image: {
      url: '/images/mockup/products/small/producto-3.webp',
      thumb: '/images/mockup/products/small/producto-3.webp',
      width: 100,
      height: 100
    },
    category: categories[0],
    createdAt: '2025-01-02T00:00:00.000Z'
  },
  {
    _id: '3816f59e-d85e-4595-b617-3226f51a4a9d',
    name: 'Producto 4',
    slug: 'producto-4',
    description: 'Lorem ipsum dolor sit...',
    content: '',
    price: 9.99,
    image: {
      url: '/images/mockup/products/small/producto-4.webp',
      thumb: '/images/mockup/products/small/producto-4.webp',
      width: 100,
      height: 100
    },
    category: categories[0],
    createdAt: '2025-05-05T00:00:00.000Z'
  },
  {
    _id: '14a95621-6165-4e92-8f4e-f74763d2b0b0',
    name: 'Producto 5',
    slug: 'producto-5',
    description: 'Lorem ipsum dolor sit...',
    content: '',
    price: 120.5,
    image: {
      url: '/images/mockup/products/small/producto-5.webp',
      thumb: '/images/mockup/products/small/producto-5.webp',
      width: 100,
      height: 100
    },
    category: categories[0],
    createdAt: '2025-06-20T00:00:00.000Z'
  },
  {
    _id: '0bcccdb1-5c57-4eb7-b1d3-c0e79615237f',
    name: 'Producto 6',
    slug: 'producto-6',
    description: 'Lorem ipsum dolor sit...',
    content: '',
    price: 20.99,
    image: {
      url: '/images/mockup/products/small/producto-6.webp',
      thumb: '/images/mockup/products/small/producto-6.webp',
      width: 100,
      height: 100
    },
    category: categories[0],
    createdAt: '2025-04-30T00:00:00.000Z'
  }
];
