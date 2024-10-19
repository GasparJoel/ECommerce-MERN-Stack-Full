
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Input } from "postcss";
import { Button } from "../ui/button";



export const CommonForm = ({formControls,formData ,setFormData,onSubmit,buttonText}) => {

  const RenderInputComponentType =(getControlItem) =>{
    let element=  null ;
    const value =formData[getControlItem.name]||''
    switch (getControlItem.componentType) {
      case 'input':
          element=(<Input
          name={getControlItem.name}
          placeholder={getControlItem.placeholder}
          id={getControlItem.name}
          type ={getControlItem.type}
          value={value}
          onChange={event =>setFormData({
             ...formData,
             [getControlItem.name]: event.target.value 
          })}
          />)
        break;

        case 'select':
          element=(
            <Select onChange={(value)=>
              setFormData({
                ...formData,
                [getControlItem.name  ]
              })
            } value={value}>
              {/* Definimos el disparador que es lo primero que se mostrara en la fila  */}
              <SelectTrigger className="w-full">
                <SelectValue placeholder={getControlItem.placeholder}/>
              </SelectTrigger>
              {/* Aquí ya es los siguientes contenidos  */}
              <SelectContent>
                {
                  
                  getControlItem.options && 
                  getControlItem.options.length > 0 ?
                  getControlItem.options.map(optionItem=> <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>):null
                }
              </SelectContent>
            </Select>
          )
        break;

        case 'textarea':
          element=(
            <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id}
            value={value}
            onChange={(event)=>
              setFormData({
                ...formData,
                [getControlItem.name]:event.target.value ,
              })
            }
            />
          )
        break;
    
      default:
        element=(<Input
        name={getControlItem.name}
        placeholder={getControlItem.placeholder}
        id={getControlItem.name}
        type ={getControlItem.type}
        value={value}
          onChange={event =>setFormData({
             ...formData,
             [getControlItem.name]: event.target.value 
          }}
        />  )
        break;
    }
    return element 
  }
    return (
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-3">
          {/* 1° vamos hacer un map de los componentes  */}
              {
                formControls.map(controlItem=> 
                <div className="grid w-full gap-1.5" key={controlItem.name}>
                   <Label className="mb-1">{controlItem.label}</Label>

                  {/* Esta funcion permite renderizar los input  */}
                   {
                   RenderInputComponentType(controlItem)
                   }

                </div>)
              }
        </div>
        <Button type="Submit" className='mt-2 w-full'> {buttonText || 'Submit'}</Button>
      </form>
    )
  }
  
