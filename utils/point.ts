export class Point {
  id: number
  x: number
  y: number
  xV: number
  yV: number

  constructor(x?: number, y?: number) {
    this.id = Point.all.length
    this.x = x ?? rand(0, Point.maxX)
    this.y = y ?? rand(0, Point.maxY)

    // Calculate xV and yV based on angular direction
    const direction = rand(0, 2 * Math.PI)
    const speed = rand(0, Point.maxSpeed)
    this.xV = speed * Math.cos(direction)
    this.yV = speed * Math.sin(direction)

    Point.all.push(this)
  }

  step(deltaTime: number) {
    this.x = mod(this.x + this.xV * deltaTime, Point.maxX)
    this.y = mod(this.y + this.yV * deltaTime, Point.maxY)
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

  // ran after a resize to keep points relative to where they were before
  scalePosition(widthScalar: number, heightScalar: number) {
    this.x *= widthScalar
    this.y *= heightScalar
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
