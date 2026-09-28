export interface MenuItem {
  id: number
  name: string
  juniorInfo: Record<string, string>
  middleInfo: Record<string, string>
}

export interface MenuGroup {
  id: string
  title: string
  items: MenuItem[]
}
