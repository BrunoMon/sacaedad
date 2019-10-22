const sacaEdad = (nacimiento) => {
    const hoy = new Date()
    const fecNac = new Date(nacimiento)
    const dif = ((((hoy.getTime() - fecNac.getTime()) / 1000) / 60) / 60) / 24
    return Math.floor((dif / 365.2425))
}
module.exports = sacaEdad