export function tempoParaSegundos(tempo) {
    const [minutos='0', segundos='0'] = tempo.split(":")
    const minutosEmSegundos = Number(minutos) *60;
    return minutosEmSegundos + Number(segundos)
}