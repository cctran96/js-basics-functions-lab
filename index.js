function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42)
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264
}

function calculatesFarePrice(start, destination) {
    var distance = Math.abs(destination - start) * 264
    switch (true) {
        case (distance <= 400):
            return 0
        case (400 < distance && distance <= 2000):
            return (distance - 400) * 0.02
        case (2000 < distance && distance <= 2500):
            return 25
        default:
            return "cannot travel that far"
    }
}