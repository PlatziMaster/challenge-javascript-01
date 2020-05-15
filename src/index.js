
const triangleArea = () => {
    let base = document.getElementById('base').value 
    let height = document.getElementById('height').value 
    let area = document.getElementById('area')

    area.innerHTML=base * height / 2 + ' ' + `Metros<sup>2</sup>`
};

