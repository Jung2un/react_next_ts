import { NextRequest, NextResponse } from 'next/server';

let todos: { id: number; task: string }[] = [];

export async function GET(req: NextRequest) {
    return NextResponse.json(todos);
}

export async function POST(req: NextRequest) {
    const { task } = await req.json();
    const newTodo = { id: Date.now(), task };
    todos.push(newTodo);
    return NextResponse.json(newTodo, { status: 201 });
}

export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    todos = todos.filter(todo => todo.id !== Number(id));
    return NextResponse.json({}, { status: 204 });
}
