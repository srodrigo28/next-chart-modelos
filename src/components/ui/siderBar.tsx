import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MdMenuOpen } from "react-icons/md";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="cursor-pointer hover:bg-slate-600">
            <MdMenuOpen size={50} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Perfil</SheetTitle>
          <SheetDescription>
           Mantenha suas informações atualizadas.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Nome completo</Label>
            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">E-mail</Label>
            <Input id="sheet-demo-username" defaultValue="@peduarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Telefone</Label>
            <Input id="sheet-demo-username" defaultValue="62 9985-1140" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Estado</Label>
            <Input id="sheet-demo-username" defaultValue="Goiás" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Estado</Label>
            <Input id="sheet-demo-username" defaultValue="Goiânia" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Salvar alterações</Button>
          <SheetClose asChild>
            <Button variant="outline">Sair do app.</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
