import { Button, Select,FormItem,Input,Form,Upload,MessageBox,Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
export default function (Vue:any) {
    Vue.component(Button.name, Button);
    Vue.component(Select.name, Select);
    Vue.component(FormItem.name, FormItem);
    Vue.component(Input.name, Input);
    Vue.component(Form.name, Form);
    Vue.component(Upload.name, Upload);
    Vue.component(MessageBox.name, MessageBox);
    Vue.component(Message.name, Message);
}