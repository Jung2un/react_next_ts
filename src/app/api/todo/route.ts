import { NextRequest, NextResponse } from 'next/server';

let todos: { id: number; task: string }[] = [];

export async function GET() {
    try {
        return NextResponse.json(todos);
    } catch (error) {
        return NextResponse.json({ error: '서버 에러' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const { task } = await req.json();

        if (!task || typeof task !== 'string') {
            return NextResponse.json({ error: '값이 필요합니다.' }, { status: 400 });
        }

        const newTodo = { id: Date.now(), task };
        todos.push(newTodo);

        return NextResponse.json(newTodo, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: '서버 에러' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'ID가 필요합니다.' }, { status: 400 });
        }

        todos = todos.filter(todo => todo.id !== Number(id));

        return new NextResponse(null, { status: 204 });
    } catch (error) {
        return NextResponse.json({ error: '서버 에러' }, { status: 500 });
    }
}
