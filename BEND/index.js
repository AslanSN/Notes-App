import express from 'express'
import logger from './loggerMiddleware'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(logger)
app.use(cors())

let Notes = [
	{
		id: 0,
		content: 'Lorem Ipsum Hola!',
		date: new Date().toISOString(),
		important: false,
	},
	{
		id: 1,
		content: 'Lorem Ipsum Hola2!',
		date: new Date().toISOString(),
		important: false,
	},
]

app.get('/', (request, response) => {
	response.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (request, response) => {
	response.json(Notes)
})

app.get('/api/notes/:id', (request, response) => {
	const id = Number(request.params.id)
	const note = Notes.find((note) => note.id === id)

	note ? response.json(note) : response.status(404).end()
})

app.delete('/api/notes/:id', (request, response) => {
	const id = Number(request.params.id)
	Notes = Notes.filter((note) => note.id !== id)
	response.status(204).end()
})

app.post('/api/notes', (request, response) => {
	const note = request.body

	if (!note || !note.content) {
		return response.status(400).json({
			error: 'note.content is missing',
		})
	}

	const allId = Notes.map((note) => note.id)
	const maxId = Math.max(...allId)

	const newNote = {
		id: maxId + 1,
		content: note.content,
		important: typeof note.important !== 'undefined' ? note.important : false,
		date: new Date().toISOString(),
	}

	Notes = [...Notes, newNote]

	response.status(201).json(newNote)
})

app.use((request, response) => {
	response.status(404).json({
		error: 'Not found',
	})
})

const PORT = 3001

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
