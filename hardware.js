
var data_hardware_cpu =[
    {
        'image' : '1.jpg',
        'name' : '13th Intel®',
        'type1'  : 'Intel® Core™ i5-12400F (6Cores,12Threads)',
        'price1' : '$139.00',
        'type2'  : 'Intel® Core™ i7-12700KF (12Cores,20Threads)',
        'price2' : '$339.00',
        'type3'  : 'Intel® Core™ i9-12900K (16Cores,24Threads)',
        'price3' : '$549.00',
    },
    {
        'image' : '2.jpg',
        'name' : 'AMD Ryzen™ 5000 Series ',
        'type1'  : 'Intel® Core™ i5-13600K (Box,14Core/20threads) ',
        'price1' : '$325.00',
        'type2'  : 'Intel® Core™ i7-13700KF (Box,16core/24threads)',
        'price2' : '$419.00',
        'type3'  : 'Intel® Core™ i9-13900K (Box,24core/32threads)',
        'price3' : '$599.00',
    },
    {
        'image' : '3.png',
        'name' : 'AMD Ryzen™ 5000 Series',
        'type1'  : 'AMD Ryzen™ 5 5600X (6Core/12Thread - 4.6GHz )',
        'price1' : '$109.00',
        'type2'  : 'AMD Ryzen™ 7 5800X (8Core/16Thread - 4.7GHz )',
        'price2' : '$69.00',
        'type3'  : 'AMD Ryzen™ 9 5900X (12Core/24Thread - 4.8GHz )',
        'price3' : '$69.00',
    },
    
];
function getDataHardwareCpu(){
    data_hardware_cpu.map((hardware_cpu)=>{
        const data_hardware_cpu=`
        <div class="box-new">
            <div class="type">In Stock</div>
            <div class="star">
                <i class="fa-solid fa-star orange"></i>
                <i class="fa-solid fa-star orange"></i>
                <i class="fa-solid fa-star orange"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <div class="image-product">
                <img src="image/hardware/cpu/${hardware_cpu.image}" alt="">
            </div>
            <div class="wish-product text-center">
                <i class="fa-solid fa-cart-shopping"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-regular fa-share-from-square"></i>                   
            </div>
            <div class="title-hardware">
                <h3>${hardware_cpu.name}</h3>
                <h4> - ${hardware_cpu.type1} = <span>${hardware_cpu.price1}</span></h4>
                <h4> - ${hardware_cpu.type2} = <span>${hardware_cpu.price2}</span></h4>
                <h4> - ${hardware_cpu.type3} = <span>${hardware_cpu.price3}</span></h4>
            </div>
            
        </div>
        `;
        $('.product-cpu').append(data_hardware_cpu);
    });
}
getDataHardwareCpu();


var data_hardware_ram =[
    {
        'image' : '1.jpg',
        'name' : 'Kingston FURY Beast RGB DDR5',
        'type1'  : 'Kingston FURY Beast RGB 16GB Single DDR5 5200MHz, CL40',
        'price1' : '$109.00',
        'type2'  : 'Kingston FURY Beast RGB 8GB Single DDR5 5200MHz, CL40',
        'price2' : '$69.00',
        'type3'  : ' ',
        'price3' : ' ',
    },
    {
        'image' : '2.jpg',
        'name' : 'Kingston FURY Renegade RGB DDR5',
        'type1'  : 'Kingston Fury Renegade RGB 16GB Single DDR5 6000MHz, CL32',
        'price1' : '$145.00',
        'type2'  : ' ',
        'price2' : ' ',
        'type3'  : ' ',
        'price3' : ' ',
    },
    {
        'image' : '3.png',
        'name' : 'XPG Lancer RGB DDR5',
        'type1'  : 'XPG LANCER RGB 32GB (16x2) - DDR5 (6000MHz)',
        'price1' : '$229.00',
        'type2'  : 'XPG LANCER RGB 32GB (16x2) - DDR5 (5200MHz)',
        'price2' : '$179.00',
        'type3'  : 'XPG LANCER RGB 32GB - DDR5 (16x2) (6000MHz)',
        'price3' : '$219.00',
    },
    {
        'image' : '4.jpg',
        'name' : 'Kingston FURY Beast RGB DDR4',
        'type1'  : 'Kingston FURY Beast RGB 16GB (8x2) DDR4 3200MHz, CL16',
        'price1' : '$89.00',
        'type2'  : 'Kingston FURY Beast RGB 32GB Single DDR4 3200MHz, CL16',
        'price2' : '$189.00',
        'type3'  : ' ',
        'price3' : ' ',
    },
    {
        'image' : '5.jpg',
        'name' : 'Corsair Vengeance RGB DDR5 - Lifetime Warranty',
        'type1'  : 'Corsair Vengeance RGB DDR5 64GB (2x32GB) 5200MHz',
        'price1' : '$339.00',
        'type2'  : 'Corsair Vengeance RGB DDR5 32GB (2x16GB) 5200MHz',
        'price2' : '$189.00',
        'type3'  : 'Corsair Vengeance RGB DDR5 32GB (2x16GB) 5200MHz - White',
        'price3' : '$189.00',
    },
    {
        'image' : '6.jpg',
        'name' : 'Corsair Vengeance PRO RGB DDR4 - Lifetime Warranty',
        'type1'  : 'Corsair Vengeance RGB PRO 32GB (2x16GB) DDR4 3200MHz ',
        'price1' : '$135.00',
        'type2'  : 'Corsair Vengeance RGB RT Edition 32GB (2x16GB) DDR4 3600MHz ',
        'price2' : '$149.00',
        'type3'  : 'Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4 3200MHz ',
        'price3' : '$99.00',
    },
    {
        'image' : '7.jpg',
        'name' : 'Corsair Vengeance PRO RGB White DDR4 - Lifetime Warranty',
        'type1'  : 'Corsair Vengeance RGB PRO 32GB (2x16GB) DDR4 3200MHz - White',
        'price1' : '$135.00',
        'type2'  : 'Corsair Vengeance RGB PRO SL 16GB (2x8GB) DDR4 3200MHz C16 White ',
        'price2' : '$149.00',
        'type3'  : 'Corsair Vengeance RGB PRO SL 16GB (2x8GB) DDR4 3200MHz - White',
        'price3' : '$99.00',
    },
    {
        'image' : '8.png',
        'name' : 'Adata XPG Spectrix D50 DDR4',
        'type1'  : 'XPG D50 RGB 32GB 3600MHz',
        'price1' : '$135.00',
        'type2'  : 'XPG D50 RGB 16GB (2x8GB) 3600MHz',
        'price2' : '$149.00',
        'type3'  : 'XPG D50G RGB 16GB - (3600MHz)',
        'price3' : '$99.00',
    },
    
];
function getDataHardwareRam(){
    data_hardware_ram.map((hardware_ram)=>{
        const data_hardware_ram=`
        <div class="box-new">
        <div class="type">In Stock</div>
        <div class="star">
            <i class="fa-solid fa-star orange"></i>
            <i class="fa-solid fa-star orange"></i>
            <i class="fa-solid fa-star orange"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>
        <div class="image-product">
            <img src="image/hardware/ram/${hardware_ram.image}" alt="">
        </div>
        <div class="wish-product text-center">
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-regular fa-share-from-square"></i>                   
        </div>
        <div class="title-hardware">
            <h3>${hardware_ram.name}</h3>
            <h4> - ${hardware_ram.type1} = <span>${hardware_ram.price1}</span></h4>
            <h4> - ${hardware_ram.type2} = <span>${hardware_ram.price2}</span></h4>
            <h4> - ${hardware_ram.type3} = <span>${hardware_ram.price3}</span></h4>
        </div>
        
    </div>
        `;
        $('.product-ram').append(data_hardware_ram);
    });
}
getDataHardwareRam();


var data_hardware_cooler =[
    {
        'image' : '1.png',
        'name' : 'NZXT KRAKEN Z LCD SERIES - White / RGB Fans',
        'type1'  : 'NZXT Kraken Z73 - White / RGB Fans ( 360mm )',
        'price1' : '$299.00',
        'type2'  : ' ',
        'price2' : ' ',
        'type3'  : ' ',
        'price3' : ' ',
    },
    {
        'image' : '2.jpg',
        'name' : 'NZXT KRAKEN Z LCD SERIES - Black / RGB Fans',
        'type1'  : 'NZXT Kraken Z73 - Black / RGB Fans ( 360mm )',
        'price1' : '$299.00',
        'type2'  : ' ',
        'price2' : ' ',
        'type3'  : ' ',
        'price3' : ' ',
    },
    {
        'image' : '3.jpg',
        'name' : 'NZXT KRAKEN X SERIES - Black / RGB Fans',
        'type1'  : 'NZXT Kraken  X73 - Black / RGB Fans ( 360mm )',
        'price1' : '$229.00',
        'type2'  : 'NZXT Kraken X63 - Black / RGB Fans ( 280mm )',
        'price2' : '$179.00',
        'type3'  : 'NZXT Kraken X53 - Black / RGB Fans ( 240mm )',
        'price3' : '$219.00',
    },
    {
        'image' : '4.png',
        'name' : 'NZXT KRAKEN X SERIES - White / RGB Fans',
        'type1'  : 'NZXT Kraken  X73 - White / RGB Fans ( 360mm )',
        'price1' : '$219.00',
        'type2'  : ' ',
        'price2' : ' ',
        'type3'  : ' ',
        'price3' : ' ',
    },
    {
        'image' : '5.jpg',
        'name' : 'be quiet! Dark Rock Pro 4 - 1Y Warranty',
        'type1'  : 'be quiet! Dark Rock Pro 4, BK022, 250W TDP, CPU',
        'price1' : '$119.00',
        'type2'  : ' ',
        'price2' : ' ',
        'type3'  : ' ',
        'price3' : ' ',
    },
    {
        'image' : '6.png',
        'name' : 'DeepCool AK620 - Black / High-Performance CPU Cooler',
        'type1'  : 'Deepcool AK620 - 260W TDP ',
        'price1' : '$135.00',
        'type2'  : ' ',
        'price2' : ' ',
        'type3'  : ' ',
        'price3' : ' ',
    },
    {
        'image' : '7.jpg',
        'name' : 'ID-COOLING SE-224-XT ARGB V2 - 180W CPU ( ARGB )',
        'type1'  : 'ID-COOLING SE-224-XT ARGB V2 - 180W CPU ( ARGB )',
        'price1' : '$135.00',
        'type2'  : ' ',
        'price2' : ' ',
        'type3'  : ' ',
        'price3' : ' ',
    },
    {
        'image' : '8.jpg',
        'name' : 'NZXT : RGB Fan Series / Twin',
        'type1'  : 'NZXT F140 RGB TWIN PACK - Black',
        'price1' : '$135.00',
        'type2'  : 'NZXT F140 RGB TWIN PACK - White ',
        'price2' : '$149.00',
        'type3'  : ' ',
        'price3' : ' ',
    },
    
];
function getDataHardwareCooler(){
    data_hardware_cooler.map((hardware_cooler)=>{
        const data_hardware_cooler=`
        <div class="box-new">
        <div class="type">In Stock</div>
        <div class="star">
            <i class="fa-solid fa-star orange"></i>
            <i class="fa-solid fa-star orange"></i>
            <i class="fa-solid fa-star orange"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>
        <div class="image-product">
            <img src="image/hardware/cooler/${hardware_cooler.image}" alt="">
        </div>
        <div class="wish-product text-center">
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-regular fa-share-from-square"></i>                   
        </div>
        <div class="title-hardware">
            <h3>${hardware_cooler.name}</h3>
            <h4> - ${hardware_cooler.type1} = <span>${hardware_cooler.price1}</span></h4>
            <h4> - ${hardware_cooler.type2} = <span>${hardware_cooler.price2}</span></h4>
            <h4> - ${hardware_cooler.type3} = <span>${hardware_cooler.price3}</span></h4>
        </div>
        
    </div>
        `;
        $('.product-cooler').append(data_hardware_cooler);
    });
}
getDataHardwareCooler();


var data_hardware_intel =[
    {
        'image' : '1.png',
        'name'  : 'Aorus Z690 XTREME (rev. 1.0)',
        'des'   : 'Z690 AORUS Motherboard with Direct 20+1+2 Phases Digital VRM Design, DDR5 XTREME MEMORY Design, Fins-Array III Heatsink, Direct-Touch Heatpipe II ,NanoCarbon Baseplate, M.2 Thermal Guard XTREME, Intel® Thunderbolt 4, ESSential Audio, Intel® WIFI 6E 802.11ax, AQUANTIA® 10GbE LAN',
        'price' : '$889.00',
    },
    {
        'image' : '2.png',
        'name'  : 'Z790 Aorus Master DDR5',
        'des'   : 'Z790 Aorus Master DDR5',
        'price' : '$549.00',
    },
    {
        'image' : '3.png',
        'name'  : 'Aorus Z690 XTREME (rev. 1.0)',
        'des'   : 'Intel® Z690 AORUS Motherboard with Direct 20+1+2 Phases Digital VRM Design, DDR5 XTREME MEMORY Design, Fins-Array III Heatsink, Direct-Touch Heatpipe II ,NanoCarbon Baseplate, M.2 Thermal Guard XTREME, Intel® Thunderbolt 4, ESSential Audio, Intel® WIFI 6E 802.11ax, AQUANTIA® 10GbE LAN',
        'price' : '$889.00',
    },
    {
        'image' : '4.jpg',
        'name'  : 'Aorus Z790 AORUS ELITE AX (rev. 1.0)',
        'des'   : 'Intel® Socket LGA 1700：Support 13th and 12th Gen Series Processor Unparalleled Performance：Twin 16*+1+2 Phases Digital VRM Solution  Dual Channel DDR5：4*SMD DIMMs with XMP 3.0 Memory Module Support  Next Generation Storage：4*PCIe 4.0 x4 M.2 Connectors',
        'price' : '$549.00',
    },
    {
        'image' : '5.png',
        'name'  : 'Gigabyte Z690 GAMING X DDR4 (rev. 1.0)',
        'des'   : 'Supports 12th Gen Intel® Core™ Series Processors​ Dual Channel Non-ECC Unbuffered DDR4, 4 DIMMs​ Direct 16+1+2 Digital VRM Design with 60A Power Stage* and Tantalum Polymer Capacitor​ Shielded Memory Routing to Avoid Interference',
        'price' : '$259.00',
    },
    {
        'image' : '6.jpg',
        'name'  : 'ASUS Prime Z690-P LGA 1700 DDR5',
        'des'   : 'ASUS Prime Z690-P LGA 1700 DDR5',
        'price' : '$239.00',
    },
    {
        'image' : '7.png',
        'name'  : ' MSI MAG Z790 TOMAHAWK DDR4 ( Wifi + Bluetooth )',
        'des'   : 'ASUS Prime Z690-P LGA 1700 DDR5',
        'price' : '$319.00',
    },
    {
        'image' : '8.png',
        'name'  : ' MSI PRO B660M-A DDR4 ( Wifi + Bluetooth ) ',
        'des'   : 'MSI PRO B660M-A DDR4 ( Wifi + Bluetooth )  ',
        'price' : '$179.00',
    },
    {
        'image' : '1.png',
        'name'  : 'Aorus Z690 XTREME (rev. 1.0)',
        'des'   : 'Z690 AORUS Motherboard with Direct 20+1+2 Phases Digital VRM Design, DDR5 XTREME MEMORY Design, Fins-Array III Heatsink, Direct-Touch Heatpipe II ,NanoCarbon Baseplate, M.2 Thermal Guard XTREME, Intel® Thunderbolt 4, ESSential Audio, Intel® WIFI 6E 802.11ax, AQUANTIA® 10GbE LAN',
        'price' : '$889.00',
    },
    {
        'image' : '2.png',
        'name'  : 'Z790 Aorus Master DDR5',
        'des'   : 'Z790 Aorus Master DDR5',
        'price' : '$549.00',
    },
    {
        'image' : '3.png',
        'name'  : 'Aorus Z690 XTREME (rev. 1.0)',
        'des'   : 'Intel® Z690 AORUS Motherboard with Direct 20+1+2 Phases Digital VRM Design, DDR5 XTREME MEMORY Design, Fins-Array III Heatsink, Direct-Touch Heatpipe II ,NanoCarbon Baseplate, M.2 Thermal Guard XTREME, Intel® Thunderbolt 4, ESSential Audio, Intel® WIFI 6E 802.11ax, AQUANTIA® 10GbE LAN',
        'price' : '$889.00',
    },
    {
        'image' : '4.jpg',
        'name'  : 'Aorus Z790 AORUS ELITE AX (rev. 1.0)',
        'des'   : 'Intel® Socket LGA 1700：Support 13th and 12th Gen Series Processor Unparalleled Performance：Twin 16*+1+2 Phases Digital VRM Solution  Dual Channel DDR5：4*SMD DIMMs with XMP 3.0 Memory Module Support  Next Generation Storage：4*PCIe 4.0 x4 M.2 Connectors',
        'price' : '$549.00',
    },
    {
        'image' : '5.png',
        'name'  : 'Gigabyte Z690 GAMING X DDR4 (rev. 1.0)',
        'des'   : 'Supports 12th Gen Intel® Core™ Series Processors​ Dual Channel Non-ECC Unbuffered DDR4, 4 DIMMs​ Direct 16+1+2 Digital VRM Design with 60A Power Stage* and Tantalum Polymer Capacitor​ Shielded Memory Routing to Avoid Interference',
        'price' : '$259.00',
    },
    {
        'image' : '6.jpg',
        'name'  : 'ASUS Prime Z690-P LGA 1700 DDR5',
        'des'   : 'ASUS Prime Z690-P LGA 1700 DDR5',
        'price' : '$239.00',
    },
    {
        'image' : '7.png',
        'name'  : ' MSI MAG Z790 TOMAHAWK DDR4 ( Wifi + Bluetooth )',
        'des'   : 'ASUS Prime Z690-P LGA 1700 DDR5',
        'price' : '$319.00',
    },
    {
        'image' : '8.png',
        'name'  : ' MSI PRO B660M-A DDR4 ( Wifi + Bluetooth ) ',
        'des'   : 'MSI PRO B660M-A DDR4 ( Wifi + Bluetooth )  ',
        'price' : '$179.00',
    },
    
];
function getDataHardwareIntel(){
    data_hardware_intel.map((hardware_intel)=>{
        const data_hardware_intel=`
        <div class="box-new peripharals">
                <div class="type">In stock</div>
                <div class="star">
                    <i class="fa-solid fa-star orange"></i>
                    <i class="fa-solid fa-star orange"></i>
                    <i class="fa-solid fa-star orange"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div class="image-product">
                    <img src="image/hardware/intel/${hardware_intel.image}" alt="">
                </div>
                <div class="wish-product text-center">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-regular fa-eye eye-p"></i>
                    <i class="fa-regular fa-share-from-square"></i>                   
                </div>
                <div class="title-product text-center"><h4>${hardware_intel.name}</h4></div>
                <div class="descpition-peripharals d-none">${hardware_intel.des}</div>
                <div class="price text-center">${hardware_intel.price}</div>
            </div>
        `;
        $('.product-intel').append(data_hardware_intel);
    });
}
getDataHardwareIntel();

var data_hardware_amd =[
    {
        'image' : '1.png',
        'name'  : 'Aorus X670E MASTER (rev. 1.0)',
        'des'   : 'AMD Socket AM5：Supports AMD Ryzen™ 7000 Series Processors Unparalleled Performance：Twin 16*+2+2 Phases Digital VRM Solution Dual Channel DDR5：4*SMD DIMMs with AMD EXPO™ & Intel® XMP Memory Module Support Next Generation Storage：2*PCIe 5.0 x4 and 2*PCIe 4.0 x4 M.2 Connectors Fins-Array III & M.2 Thermal Guard III：To Ensure VRM Power Stability & 25110 PCIe 5.0 M.2 SSD Performance',
        'price' : '$519.00',
    },
    {
        'image' : '2.png',
        'name'  : 'AORUS X570 MASTER',
        'des'   : 'Supports AMD 3rd Gen Ryzen™/ 2nd Gen Ryzen™/ 2nd Gen Ryzen™ with Radeon™ Vega Graphics/ Ryzen™ with Radeon™ Vega Graphics Processors Dual Channel ECC/ Non-ECC Unbuffered DDR4, 4 DIMMs Direct 14 Phases Infineon Digital VRM Solution with PowIRstage Advanced Thermal Design with Fins-Array Heatsink and Direct Touch Heatpipe',
        'price' : '$419.00',
    },
    {
        'image' : '3.png',
        'name'  : 'Gigabyte X670 GAMING X AX (rev. 1.0)',
        'des'   : 'AMD Socket AM5：Supports AMD Ryzen™ 7000 Series Processors Unparalleled Performance：Twin 16*+2+2 Phases Digital VRM Solution Dual Channel DDR5：4*SMD DIMMs with AMD EXPO™ & Intel® XMP Memory Module Support Next Generation Storage：1*PCIe 5.0 x4 and 3*PCIe 4.0 x4 M.2 Connectors Mega-Heatpipe & M.2 Thermal Guard：To Ensure VRM Power Stability & 25110 PCIe 5.0 M.2 SSD Performance',
        'price' : '$329.00',
    },
    {
        'image' : '4.png',
        'name'  : 'Gigabyte B650 AERO G (rev. 1.0)',
        'des'   : 'Intel® Socket LGA 1700：Support 13th and 12th Gen Series Processor Unparalleled Performance：Twin 16*+1+2 Phases Digital VRM Solution  Dual Channel DDR5：4*SMD DIMMs with XMP 3.0 Memory Module Support  Next Generation Storage：4*PCIe 4.0 x4 M.2 Connectors',
        'price' : '$549.00',
    },
    {
        'image' : '5.jpg',
        'name'  : 'Asus ROG Crosshair VIII Formula',
        'des'   : 'AMD AM4 socket: Ready for AMD Ryzen™ 5000 Series/ 4000 G-Series/ 3000 Series/ 3000 G-Series/ 2000 Series/ 2000 G-Series desktop processors; also supports up to two M.2 drives and features USB 3.2 Gen 2 and AMD StoreMI to maximiz',
        'price' : '$550.00',
    },
    {
        'image' : '6.jpg',
        'name'  : 'Asus ROG Crosshair VIII Impact',
        'des'   : 'AMD AM4 socket: Ready for AMD Ryzen™ 5000 Series/ 4000 G-Series/ 3000 Series/ 3000 G-Series/ 2000 Series/ 2000 G-Series desktop processors; also supports up to two M.2 drives and features USB 3.2 Gen 2 and AMD StoreMI to maximize connectivity and speed  SO-DIMM.2: Bundled expansion card with heatsink allows two M.2 drives to be connected via an SO-DIMM interface and helps control SSD thermals for maximum performance ',
        'price' : '$439.00',
    },
    {
        'image' : '7.jpg',
        'name'  : ' ASUS ProArt X570-Creator WiFi',
        'des'   : 'AM4 socket: Ready for AMD Ryzen 5000 Series / 5000 G-Series / 4000 G-Series / 3000 Series / 3000 G-Series / 2000 Series / 2000 G-Series CPUs Robust performance: 14+2 power stages, ProCool II power connector, high-quality alloy chokes and durable capacitors Comprehensive',
        'price' : '$339.00',
    },
    {
        'image' : '8.jpg',
        'name'  : 'Asus ROG Strix X570-E Gaming',
        'des'   : 'Amd AM4 socket:  ready for 2nd and 3rd Gen AMD Ryzen processors to maximize connectivity and speed with up to two M. 2 drives, USB 3. 2 Gen2 and AMD stored Aura Sync RGB:  ASUS-exclusive aura Sync RGB lighting, including RGB headers and addressable Gen 2 headers ',
        'price' : '$179.00',
    },
    {
        'image' : '1.png',
        'name'  : 'Aorus X670E MASTER (rev. 1.0)',
        'des'   : 'AMD Socket AM5：Supports AMD Ryzen™ 7000 Series Processors Unparalleled Performance：Twin 16*+2+2 Phases Digital VRM Solution Dual Channel DDR5：4*SMD DIMMs with AMD EXPO™ & Intel® XMP Memory Module Support Next Generation Storage：2*PCIe 5.0 x4 and 2*PCIe 4.0 x4 M.2 Connectors Fins-Array III & M.2 Thermal Guard III：To Ensure VRM Power Stability & 25110 PCIe 5.0 M.2 SSD Performance',
        'price' : '$519.00',
    },
    {
        'image' : '2.png',
        'name'  : 'AORUS X570 MASTER',
        'des'   : 'Supports AMD 3rd Gen Ryzen™/ 2nd Gen Ryzen™/ 2nd Gen Ryzen™ with Radeon™ Vega Graphics/ Ryzen™ with Radeon™ Vega Graphics Processors Dual Channel ECC/ Non-ECC Unbuffered DDR4, 4 DIMMs Direct 14 Phases Infineon Digital VRM Solution with PowIRstage Advanced Thermal Design with Fins-Array Heatsink and Direct Touch Heatpipe',
        'price' : '$419.00',
    },
    {
        'image' : '3.png',
        'name'  : 'Gigabyte X670 GAMING X AX (rev. 1.0)',
        'des'   : 'AMD Socket AM5：Supports AMD Ryzen™ 7000 Series Processors Unparalleled Performance：Twin 16*+2+2 Phases Digital VRM Solution Dual Channel DDR5：4*SMD DIMMs with AMD EXPO™ & Intel® XMP Memory Module Support Next Generation Storage：1*PCIe 5.0 x4 and 3*PCIe 4.0 x4 M.2 Connectors Mega-Heatpipe & M.2 Thermal Guard：To Ensure VRM Power Stability & 25110 PCIe 5.0 M.2 SSD Performance',
        'price' : '$329.00',
    },
    {
        'image' : '4.png',
        'name'  : 'Gigabyte B650 AERO G (rev. 1.0)',
        'des'   : 'Intel® Socket LGA 1700：Support 13th and 12th Gen Series Processor Unparalleled Performance：Twin 16*+1+2 Phases Digital VRM Solution  Dual Channel DDR5：4*SMD DIMMs with XMP 3.0 Memory Module Support  Next Generation Storage：4*PCIe 4.0 x4 M.2 Connectors',
        'price' : '$549.00',
    },
    {
        'image' : '5.jpg',
        'name'  : 'Asus ROG Crosshair VIII Formula',
        'des'   : 'AMD AM4 socket: Ready for AMD Ryzen™ 5000 Series/ 4000 G-Series/ 3000 Series/ 3000 G-Series/ 2000 Series/ 2000 G-Series desktop processors; also supports up to two M.2 drives and features USB 3.2 Gen 2 and AMD StoreMI to maximiz',
        'price' : '$550.00',
    },
    {
        'image' : '6.jpg',
        'name'  : 'Asus ROG Crosshair VIII Impact',
        'des'   : 'AMD AM4 socket: Ready for AMD Ryzen™ 5000 Series/ 4000 G-Series/ 3000 Series/ 3000 G-Series/ 2000 Series/ 2000 G-Series desktop processors; also supports up to two M.2 drives and features USB 3.2 Gen 2 and AMD StoreMI to maximize connectivity and speed  SO-DIMM.2: Bundled expansion card with heatsink allows two M.2 drives to be connected via an SO-DIMM interface and helps control SSD thermals for maximum performance ',
        'price' : '$439.00',
    },
    {
        'image' : '7.jpg',
        'name'  : ' ASUS ProArt X570-Creator WiFi',
        'des'   : 'AM4 socket: Ready for AMD Ryzen 5000 Series / 5000 G-Series / 4000 G-Series / 3000 Series / 3000 G-Series / 2000 Series / 2000 G-Series CPUs Robust performance: 14+2 power stages, ProCool II power connector, high-quality alloy chokes and durable capacitors Comprehensive',
        'price' : '$339.00',
    },
    {
        'image' : '8.jpg',
        'name'  : 'Asus ROG Strix X570-E Gaming',
        'des'   : 'Amd AM4 socket:  ready for 2nd and 3rd Gen AMD Ryzen processors to maximize connectivity and speed with up to two M. 2 drives, USB 3. 2 Gen2 and AMD stored Aura Sync RGB:  ASUS-exclusive aura Sync RGB lighting, including RGB headers and addressable Gen 2 headers ',
        'price' : '$179.00',
    },
    
];
function getDataHardwareAmd(){
    data_hardware_amd.map((hardware_amd)=>{
        const data_hardware_amd=`
        <div class="box-new peripharals">
                <div class="type">In stock</div>
                <div class="star">
                    <i class="fa-solid fa-star orange"></i>
                    <i class="fa-solid fa-star orange"></i>
                    <i class="fa-solid fa-star orange"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div class="image-product">
                    <img src="image/hardware/amd/${hardware_amd.image}" alt="">
                </div>
                <div class="wish-product text-center">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-regular fa-eye eye-p"></i>
                    <i class="fa-regular fa-share-from-square"></i>                   
                </div>
                <div class="title-product text-center"><h4>${hardware_amd.name}</h4></div>
                <div class="descpition-peripharals d-none">${hardware_amd.des}</div>
                <div class="price text-center">${hardware_amd.price}</div>
            </div>
        `;
        $('.product-amd').append(data_hardware_amd);
    });
}
getDataHardwareAmd();

var data_hardware_gpu =[
    {
        'image' : '1.png',
        'name'  : 'AORUS GeForce RTX™ 4090 MASTER 24G',
        'des'   : 'NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficiency 4th Generation Tensor Cores: Up to 2X AI performance 3rd Generation RT Cores: Up to 2X ray tracing performance Powered by GeForce RTX™ 4090 Integrated with 24GB GDDR6X 384-bit memory interface',
        'price' : '$1,899.00',
    },
    {
        'image' : '2.png',
        'name'  : 'Gigabyte GeForce RTX™ 4090 GAMING OC 24G',
        'des'   : 'NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficiency 4th Generation Tensor Cores: Up to 2X AI performanc 3rd Generation RT Cores: Up to 2X ray tracing performance Powered by GeForce RTX® 4090 Integrated with 24GB GDDR6X 384-bit memory interface',
        'price' : '$1,839.00',
    },
    {
        'image' : '3.png',
        'name'  : 'AORUS GeForce RTX™ 4080 16GB MASTER',
        'des'   : 'NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficienc 4th Generation Tensor Cores: Up to 2X AI performance 3rd Generation RT Cores: Up to 2X ray tracing performance Powered by GeForce RTX™ 4080 16GB Integrated with 16GB GDDR6X 256-bit memory interface',
        'price' : '$1,499.00',
    },
    {
        'image' : '4.png',
        'name'  : 'Gigabyte GeForce RTX™ 4080 16GB EAGLE',
        'des'   : 'NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficiency 4th Generation Tensor Cores: Up to 2X AI performance 3rd Generation RT Cores: Up to 2X ray tracing performance Powered by GeForce RTX™ 4080 16GB Integrated with 16GB GDDR6X 256-bit memory interface',
        'price' : '$1,459.00',
    },
    {
        'image' : '5.png',
        'name'  : 'Gigabyte GeForce RTX™ 3080 Ti VISION OC 12G',
        'des'   : 'NVIDIA Ampere Streaming Multiprocessors 2nd Generation RT Cores 3rd Generation Tensor Cores Powered by GeForce RTX™ 3080 Ti Integrated with 12GB GDDR6X 384-bit memory interface WINDFORCE 3X Cooling System with alternate spinning fans  RGB Fusion 2.0  Protection metal back plate',
        'price' : '$899.00',
    },
    {
        'image' : '6.jpg',
        'name'  : 'AORUS GeForce RTX™ 3070 Ti MASTER 8G',
        'des'   : 'AORUS GeForce RTX™ 3070 Ti MASTER 8G ',
        'price' : '$699.00',
    },
    {
        'image' : '7.png',
        'name'  : 'Gigabyte GV-N730D5-2GI 3G',
        'des'   : 'Powered by NVIDIA GeForce GT 730 GPU Integrated with the first 2048MB GDDR5 memory and 64-bit memory interfac Core Clock: 902 MHz Features Dual-Link DVI-D / HDMI / D-Sub Support PCI Express 2.0 x8 bus interface',
        'price' : '$79.00',
    },
    {
        'image' : '8.jpg',
        'name'  : 'ASUS TUF Gaming GeForce RTX™ 4090 OC Edition 24GB GDDR6X',
        'des'   : 'NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficiency 4th Generation Tensor Cores:Up to 4x performance with DLSS 3 vs. brute-force rendering  3rd Generation RT Cores: Up to 2X ray tracing performance OC mode: Boost clock 2595 MHz (OC mode)/ 2565 MHz (Gaming mode) Axial-tech fans scaled up to deliver 23% more airflow  ',
        'price' : '$1,999.00',
    },
    {
        'image' : '1.png',
        'name'  : 'AORUS GeForce RTX™ 4090 MASTER 24G',
        'des'   : 'NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficiency 4th Generation Tensor Cores: Up to 2X AI performance 3rd Generation RT Cores: Up to 2X ray tracing performance Powered by GeForce RTX™ 4090 Integrated with 24GB GDDR6X 384-bit memory interface',
        'price' : '$1,899.00',
    },
    {
        'image' : '2.png',
        'name'  : 'Gigabyte GeForce RTX™ 4090 GAMING OC 24G',
        'des'   : 'NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficiency 4th Generation Tensor Cores: Up to 2X AI performanc 3rd Generation RT Cores: Up to 2X ray tracing performance Powered by GeForce RTX® 4090 Integrated with 24GB GDDR6X 384-bit memory interface',
        'price' : '$1,839.00',
    },
    {
        'image' : '3.png',
        'name'  : 'AORUS GeForce RTX™ 4080 16GB MASTER',
        'des'   : 'NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficienc 4th Generation Tensor Cores: Up to 2X AI performance 3rd Generation RT Cores: Up to 2X ray tracing performance Powered by GeForce RTX™ 4080 16GB Integrated with 16GB GDDR6X 256-bit memory interface',
        'price' : '$1,499.00',
    },
    {
        'image' : '4.png',
        'name'  : 'Gigabyte GeForce RTX™ 4080 16GB EAGLE',
        'des'   : 'NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficiency 4th Generation Tensor Cores: Up to 2X AI performance 3rd Generation RT Cores: Up to 2X ray tracing performance Powered by GeForce RTX™ 4080 16GB Integrated with 16GB GDDR6X 256-bit memory interface',
        'price' : '$1,459.00',
    },
    {
        'image' : '5.png',
        'name'  : 'Gigabyte GeForce RTX™ 3080 Ti VISION OC 12G',
        'des'   : 'NVIDIA Ampere Streaming Multiprocessors 2nd Generation RT Cores 3rd Generation Tensor Cores Powered by GeForce RTX™ 3080 Ti Integrated with 12GB GDDR6X 384-bit memory interface WINDFORCE 3X Cooling System with alternate spinning fans  RGB Fusion 2.0  Protection metal back plate',
        'price' : '$899.00',
    },
    {
        'image' : '6.jpg',
        'name'  : 'AORUS GeForce RTX™ 3070 Ti MASTER 8G',
        'des'   : 'AORUS GeForce RTX™ 3070 Ti MASTER 8G ',
        'price' : '$699.00',
    },
    {
        'image' : '7.png',
        'name'  : 'Gigabyte GV-N730D5-2GI 3G',
        'des'   : 'Powered by NVIDIA GeForce GT 730 GPU Integrated with the first 2048MB GDDR5 memory and 64-bit memory interfac Core Clock: 902 MHz Features Dual-Link DVI-D / HDMI / D-Sub Support PCI Express 2.0 x8 bus interface',
        'price' : '$79.00',
    },
    {
        'image' : '8.jpg',
        'name'  : 'ASUS TUF Gaming GeForce RTX™ 4090 OC Edition 24GB GDDR6X',
        'des'   : 'NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficiency 4th Generation Tensor Cores:Up to 4x performance with DLSS 3 vs. brute-force rendering  3rd Generation RT Cores: Up to 2X ray tracing performance OC mode: Boost clock 2595 MHz (OC mode)/ 2565 MHz (Gaming mode) Axial-tech fans scaled up to deliver 23% more airflow  ',
        'price' : '$1,999.00',
    },
    
];
function getDataHardwareGpu(){
    data_hardware_gpu.map((hardware_gpu)=>{
        const data_hardware_gpu=`
        <div class="box-new peripharals">
                <div class="type">In stock</div>
                <div class="star">
                    <i class="fa-solid fa-star orange"></i>
                    <i class="fa-solid fa-star orange"></i>
                    <i class="fa-solid fa-star orange"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <div class="image-product">
                    <img src="image/hardware/gpu/${hardware_gpu.image}" alt="">
                </div>
                <div class="wish-product text-center">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-regular fa-eye eye-p"></i>
                    <i class="fa-regular fa-share-from-square"></i>                   
                </div>
                <div class="title-product text-center"><h4>${hardware_gpu.name}</h4></div>
                <div class="descpition-peripharals d-none">${hardware_gpu.des}</div>
                <div class="price text-center">${hardware_gpu.price}</div>
            </div>
        `;
        $('.product-gpu').append(data_hardware_gpu);
    });
}
getDataHardwareGpu();


var data_hardware_psu =[
    {
        'image' : '1.jpg',
        'name' : 'Corsair CV Series 80 Plus Bronze ATX Power',
        'type1'  : 'Corsair CV750 750w ( 80+ Bronze )',
        'price1' : '$79.00',
        'type2'  : 'Corsair CV650 650w ( 80+ Bronze )',
        'price2' : '$69.00',
        'type3'  : ' ',
        'price3' : ' ',
    },
    {
        'image' : '2.jpg',
        'name' : 'ROG Power Supply (Warranty/120months)',
        'type1'  : 'ASUS Rog Thor 1200W / Oled Screen ( 80+ Platinum )',
        'price1' : '$339.00',
        'type2'  : 'ASUS Rog Thor 850W / Oled Screen ( 80+ Platinum )',
        'price2' : '$240.00',
        'type3'  : 'ASUS Rog Strix 750W (80+ GOLD/Fully Modular)',
        'price3' : '$169.00',
    },
    {
        'image' : '3.jpg',
        'name' : 'Gigabyte PowerSupply (2 - YearWarranty)',
        'type1'  : 'Gigabyte GP-P1000GM ( 80+ GOLD - Modular ) ',
        'price1' : '$179.00',
        'type2'  : 'Gigabyte GP-P850GM ( 80+ GOLD - Modular ) ',
        'price2' : '$139.00',
        'type3'  : 'Gigabyte GP-P750GM ( 80+ GOLD - Modular ) ',
        'price3' : '$110.00',
    },
    {
        'image' : '4.jpg',
        'name' : 'MSI Power Supply ( 10 Years Warranty )',
        'type1'  : 'MSI MPG A650GF ( 80+ Gold , Modular )',
        'price1' : '$99.00',
        'type2'  : 'MSI MPG A750GF ( 80+ Gold , Modular )',
        'price2' : '$139.00',
        'type3'  : 'MSI MPG A850GF ( 80+ Gold , Modular )',
        'price3' : '$149.00',
    },
    {
        'image' : '5.png',
        'name' : 'Asus TUF Gaming Power Supply',
        'type1'  : 'ASUS TUF 550W Bronze ( 80+ Bronze )',
        'price1' : '$59.00',
        'type2'  : 'ASUS TUF 750W Bronze ( 80+ Bronze )',
        'price2' : '$110.00',
        'type3'  : ' ',
        'price3' : ' ',
    },
    
];
function getDataHardwarePsu(){
    data_hardware_psu.map((hardware_psu)=>{
        const data_hardware_psu=`
        <div class="box-new">
        <div class="type">In Stock</div>
        <div class="star">
            <i class="fa-solid fa-star orange"></i>
            <i class="fa-solid fa-star orange"></i>
            <i class="fa-solid fa-star orange"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>
        <div class="image-product">
            <img src="image/hardware/psu/${hardware_psu.image}" alt="">
        </div>
        <div class="wish-product text-center">
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-regular fa-share-from-square"></i>                   
        </div>
        <div class="title-hardware">
            <h3>${hardware_psu.name}</h3>
            <h4> - ${hardware_psu.type1} = <span>${hardware_psu.price1}</span></h4>
            <h4> - ${hardware_psu.type2} = <span>${hardware_psu.price2}</span></h4>
            <h4> - ${hardware_psu.type3} = <span>${hardware_psu.price3}</span></h4>
        </div>
        
    </div>
        `;
        $('.product-psu').append(data_hardware_psu);
    });
}
getDataHardwarePsu();


var data_hardware_storage =[
    {
        'image' : '1.jpg',
        'name' : 'Samsung PM9A1( M.2 PCIE 4.0 )',
        'type1'  : 'Samsung PM9A1 1TB (R/W 7000/5100MB)',
        'price1' : '$155.00',
        'type2'  : 'Samsung PM9A1 512GB (R/W 7000/5100MB)',
        'price2' : '$89.00',
        'type3'  : ' ',
        'price3' : ' ',
    },
    {
        'image' : '2.jpg',
        'name' : 'Samsung 980 PRO ( M.2 PCIE )',
        'type1'  : 'Samsung 980 PRO ( M.2 PCIE NVMe ) 500GB',
        'price1' : '$89.00',
        'type2'  : 'Samsung 980 PRO ( M.2 PCIE NVMe ) 1TB',
        'price2' : '$169.00',
        'type3'  : 'Samsung 980 PRO ( M.2 PCIE NVMe ) 2TB',
        'price3' : '$319.00',
    },
    {
        'image' : '3.jpg',
        'name' : 'Intel 670p Series ( M.2 PCIE )',
        'type1'  : 'Intel 670p Series 1TB (R/W 3500/2500MB) ',
        'price1' : '$139.00',
        'type2'  : 'Intel 670p Series 512GB (R/W 3500/2500MB)',
        'price2' : '$75.00',
        'type3'  : ' ',
        'price3' : ' ',
    },
    {
        'image' : '4.jpg',
        'name' : 'KINGSTON ( M.2 )',
        'type1'  : 'Kingston NV1 250G M.2 2280 ',
        'price1' : '$40.00',
        'type2'  : 'A400 M.2 SATA SSD 480GB',
        'price2' : '$59.00',
        'type3'  : ' ',
        'price3' : ' ',
    },
    {
        'image' : '5.jpg',
        'name' : 'Adata Legend M.2 PCIE Series',
        'type1'  : 'ADATA Legend 850 1TB PCIe Gen4 (R/W 5,000/4,500MB)',
        'price1' : '$99.00',
        'type2'  : 'ADATA Legend 710 512GB PCIe Gen3 (R/W 2,400/1,800MB)',
        'price2' : '$45.00',
        'type3'  : 'ADATA Legend 710 256GB PCIe Gen3 (R/W 2,400/1,800MB)',
        'price3' : '$29.00',
    },
    {
        'image' : '6.jpg',
        'name' : 'WD Blue Hard Drive - 7200 RPM',
        'type1'  : 'WD Blue 1TB 7200rpm - Hard Drive',
        'price1' : '$35.00',
        'type2'  : 'WD Blue 2TB 7200rpm - Hard Drive',
        'price2' : '$65.00',
        'type3'  : ' ',
        'price3' : ' ',
    },
    {
        'image' : '7.jpg',
        'name' : 'Seagate Barracuda PC Hard Drive - 7200 RPM',
        'type1'  : 'Seagate Barracuda 1TB 7200rpm',
        'price1' : '$35.00',
        'type2'  : 'Seagate Barracuda 2TB 7200rpm',
        'price2' : '$65.00',
        'type3'  : ' ',
        'price3' : ' ',
    },
    {
        'image' : '8.png',
        'name' : 'Gigabyte GIGABYTE SSD NAND',
        'type1'  : 'Gigabyte GIGABYTE SSD 120GB NAND',
        'price1' : '$29.00',
        'type2'  : ' ',
        'price2' : ' ',
        'type3'  : ' ',
        'price3' : ' ',
    },
    
];
function getDataHardwareStorage(){
    data_hardware_storage.map((hardware_storage)=>{
        const data_hardware_storage=`
        <div class="box-new">
        <div class="type">In Stock</div>
        <div class="star">
            <i class="fa-solid fa-star orange"></i>
            <i class="fa-solid fa-star orange"></i>
            <i class="fa-solid fa-star orange"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>
        <div class="image-product">
            <img src="image/hardware/storage/${hardware_storage.image}" alt="">
        </div>
        <div class="wish-product text-center">
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-regular fa-share-from-square"></i>                   
        </div>
        <div class="title-hardware">
            <h3>${hardware_storage.name}</h3>
            <h4> - ${hardware_storage.type1} = <span>${hardware_storage.price1}</span></h4>
            <h4> - ${hardware_storage.type2} = <span>${hardware_storage.price2}</span></h4>
            <h4> - ${hardware_storage.type3} = <span>${hardware_storage.price3}</span></h4>
        </div>
        
    </div>
        `;
        $('.product-storage').append(data_hardware_storage);
    });
}
getDataHardwareStorage();