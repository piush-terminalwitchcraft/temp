import { createSlice, current } from "@reduxjs/toolkit";



export const  documentSlice = createSlice({
    name: 'document',
    initialState: {
        cells: [
            {
                id: 'vnjfnv',
                content: 'Hello World'
            },
            {
                id: 'dcsinva',
                content: 'Hello World 2'
            },
        ],
        loading: false,
        error: null,
        success: null,
        message: null,
        count: 0,
    },
    reducers: {
        addCell: (state, action) => {
            const { id, content } = action.payload
            state.cells.push({ id, content })
        },
        removeCell: (state, action) => {
            const { id } = action.payload;
            console.log(current(state))
            state.cells = state.cells.filter(cell => cell.id !== id)
            console.log(current(state))
        },
        updateCell: (state, action) => {
            const { id, content } = action.payload
            console.log(current(state))
            const cellIndex = state.cells.findIndex(cell => cell.id === id);
            if (cellIndex !== -1) {
              state.cells[cellIndex].content = content;
            }
        },
        addCellAtPosition: (state, action) => {
            const { id, content, position } = action.payload
            state.cells.splice(position, 0, { id, content })
        }

    }
})

export const { addCell, removeCell, updateCell, addCellAtPosition } = documentSlice.actions
export default documentSlice.reducer