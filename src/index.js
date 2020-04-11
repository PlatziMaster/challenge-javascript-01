const triangleArea = (base, height) => {
    const b = parseFloat(base);
    const h = parseFloat(height);

    if (typeof b !== 'number' || !b)
        return 'En la base. Favor de enviar solo numeros mayores a cero.';
    if (typeof h !== 'number' || !h)
        return 'En la altura. Favor de enviar solo numeros mayores a cero.';

    return (b * h) / 2;
};

module.exports = triangleArea;