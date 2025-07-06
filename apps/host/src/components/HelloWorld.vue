<script setup lang="ts">
import { ref, computed } from 'vue'

interface GridPosition {
  row: number;
  col: number;
}

interface StatItem {
  id: number;
  name: string;
  value: string;
  change: string;
  icon: string;
  position: GridPosition;
  colspan?: number;
}

const gridSize = {
  rows: 3,
  cols: 4
}

const stats = ref<StatItem[]>([
  { id: 1, name: 'Total Users', value: '8.2K', change: '+12%', icon: '👥', position: { row: 0, col: 0 }, colspan: 2 },
  { id: 2, name: 'Revenue', value: '$23,560', change: '+8%', icon: '💰', position: { row: 0, col: 2 } },
  { id: 3, name: 'Active Projects', value: '245', change: '+18%', icon: '📊', position: { row: 0, col: 3 } },
  { id: 4, name: 'Conversion Rate', value: '3.2%', change: '+2%', icon: '📈', position: { row: 1, col: 0 } }
])

const grid = computed(() => {
  const cells = Array(gridSize.rows).fill(null).map(() => Array(gridSize.cols).fill(null))
  stats.value.forEach(stat => {
    cells[stat.position.row][stat.position.col] = stat
  })
  return cells
})

const draggedItem = ref<number | null>(null)
const dragOverCell = ref<GridPosition | null>(null)

const handleDragStart = (id: number) => {
  draggedItem.value = id
}

const handleDragOver = (e: DragEvent, row: number, col: number) => {
  e.preventDefault()
  dragOverCell.value = { row, col }
}
const handleDragLeave = () => {
  dragOverCell.value = null
}

const handleDrop = (row: number, col: number) => {
  if (draggedItem.value === null) return

  const updatedStats = [...stats.value]
  const draggedStat = updatedStats.find(stat => stat.id === draggedItem.value)
  const targetStat = updatedStats.find(stat => 
    stat.position.row === row && stat.position.col === col
  )

  if (draggedStat && targetStat) {
    // Swap positions between dragged item and target item
    const draggedPos = { ...draggedStat.position }
    draggedStat.position = { ...targetStat.position }
    targetStat.position = { ...draggedPos }
  } else if (draggedStat) {
    // If dropping to empty cell
    draggedStat.position = { row, col }
  }
  
  stats.value = updatedStats
  draggedItem.value = null
  dragOverCell.value = null
}
</script>

<template>
  <div class="p-6">
    <h2 class="text-2xl font-semibold text-gray-800 mb-6">Dashboard Widgets</h2>
    
    <div class="grid gap-4" :style="`grid-template-columns: repeat(${gridSize.cols}, minmax(0, 1fr))`">
      <template v-for="(row, rowIndex) in grid" :key="rowIndex">
        <template v-for="(cell, colIndex) in row" :key="colIndex">
          <div
            :style="cell?.colspan ? `grid-column: span ${cell.colspan}` : ''"
            class="h-[200px] border-2 border-dashed border-gray-200 rounded-xl p-4"
            :class="dragOverCell?.row === rowIndex && dragOverCell?.col === colIndex ? 'border-emerald-500' : ''"
            @dragover="(e) => handleDragOver(e, rowIndex, colIndex)"
            @dragleave="handleDragLeave"
            @drop="handleDrop(rowIndex, colIndex)"
          >
            <div v-if="cell"
                 draggable="true"
                 @dragstart="handleDragStart(cell.id)"
                 :class="`h-full bg-white rounded-lg p-4 shadow-sm transition-all
                          ${draggedItem === cell.id ? 'opacity-50' : ''}
                          hover:shadow-md cursor-move`">
              <div class="flex items-center justify-between mb-2">
                <span class="text-2xl">{{ cell.icon }}</span>
                <span :class="`text-sm font-medium ${
                  cell.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`">
                  {{ cell.change }}
                </span>
              </div>
              <h3 class="text-gray-500 text-sm font-medium">{{ cell.name }}</h3>
              <p class="text-xl font-semibold text-gray-900 mt-1">{{ cell.value }}</p>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>
