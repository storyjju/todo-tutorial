import { TodoList } from "@/components/todo-list"
import { AuroraText } from "@/components/ui/aurora-text"

export default function Page() {
  const title = (
    <h1 className="text-3xl font-bold tracking-tight">
      ✨ 오늘의 <AuroraText>할 일</AuroraText>
    </h1>
  )

  return (
    <div className="flex min-h-svh justify-center p-6">
      <div className="flex w-full max-w-md min-w-0 flex-col gap-6">
        <div>
          {title}
          <p className="text-sm text-muted-foreground">
            하나씩 차근차근 해치워 봐요! 🙌
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            (<kbd>d</kbd> 키를 누르면 다크 모드로 바뀌어요)
          </p>
        </div>
        <TodoList />
      </div>
    </div>
  )
}
