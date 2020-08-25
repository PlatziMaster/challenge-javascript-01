/**
 * Triangles area
 * @param base size
 * @param height size
 * @returns area 
 */
function triangleArea(base: number, height: number): number {

    if (base < 0) throw new Error("Negative base incorrect");

    if (height < 0) throw new Error("Negative height incorrect");

    return (base * height) / 2
};

export = triangleArea;