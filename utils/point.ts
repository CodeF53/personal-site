export class Point {
  id: number
  x: number
  y: number
  xV: number
  yV: number

  constructor(x?: number, y?: number) {
    this.id = Point.all.length
    this.x = x || rand(0, Point.maxX)
    this.y = y || rand(0, Point.maxY)
    this.xV = rand(-Point.maxSpeed, Point.maxSpeed)
    this.yV = rand(-Point.maxSpeed, Point.maxSpeed)

    Point.all.push(this)
  }

  step() {
    this.x = mod(this.x + this.xV, Point.maxX)
    this.y = mod(this.y + this.yV, Point.maxY)
  }

  render() {
    // drawCircle(this)

    // connect to other points
    const leftX = -(Point.maxX - this.x)
    const rightX = Point.maxX + this.x
    const topY = -(Point.maxY - this.y)
    const bottomY = Point.maxY + this.y

    Point.all.forEach((point) => {
      drawLine(point, { x: leftX, y: topY })
      drawLine(point, { x: leftX, y: this.y })
      drawLine(point, { x: leftX, y: bottomY })

      drawLine(point, { x: this.x, y: topY })
      if (point.id < this.id)
        drawLine(point, this)
      drawLine(point, { x: this.x, y: bottomY })

      drawLine(point, { x: rightX, y: topY })
      drawLine(point, { x: rightX, y: this.y })
      drawLine(point, { x: rightX, y: bottomY })
    })
  }

  static all: Point[] = []
  static maxX: number
  static maxY: number
  static maxSpeed: number
}

export interface PointLike {
  x: number
  y: number
}
