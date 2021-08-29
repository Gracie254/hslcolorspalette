export const RgbTohsl = (r, g, b) => {
    r /= 255
    g /= 255
    b /= 255

    let cmin = Math.min(r, g, b),
     cmax = Math.max(r, g, b),
     delta = cmax - cmin,
     h=0,
     s=0,
     l=0

    if(delta === 0)
        h = 0;
    else switch(cmax){
        case r: 
             h = ((g - b) / delta) % 6;
             break;
        case g: 
            h= (b - r) /delta + 2
            break;
        case b: 
            h = (r - b) /delta + 4
            break;
            default:
                h = 0
    }
    h = Math.round(h * 60)
    if(h < 0){
        h += 360
    }

    l = (cmax + cmin) / 2
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

    s = +(s * 100).toFixed(1)
    l = +(l * 100).toFixed(1)
        var hsl = [h, s, l]
    return hsl
}

