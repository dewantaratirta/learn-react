import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import TransferContent from './TransferContent'
import './style.scss'
import { BorderBeam } from '@/components/ui/border-beam'

const Content = () => {
  return (
    <Tabs defaultValue='transfer'>
      <div className='flex flex-col flex-center'>
        <TabsList className='tablist'>
          <TabsTrigger value='transfer'>Transfer</TabsTrigger>
          <TabsTrigger value='withdraw'>Withdraw</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value='transfer'>
        <TransferContent />
      </TabsContent>

      <TabsContent value='withdraw'>
        <div>
          <h1>Withdraw</h1>
          <p>Here you can withraw your token</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}

export const MainCard = () => {
  return (
    <Card className='w-3/4 md:w-1/2 relative'>
      <BorderBeam />

      {/* <CardHeader>
        <CardTitle className='text-center'>Apps</CardTitle>
      </CardHeader> */}

      <CardContent className='pt-6 pb-8'>
        <Content />
      </CardContent>
    </Card>
  )
}
