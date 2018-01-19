import React, { Component } from 'react'
import ErrorHandler         from './error-handler'
import HomeLayout           from '../ui/home-layout'
import Logo                 from '../ui/logo'

class App extends Component {
  render(){
    return (
      <ErrorHandler>
        <HomeLayout>
          <header>Base App</header>
          <Logo />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis libero nisl, sed molestie mi fringilla vel. Aliquam consectetur gravida nunc, sit amet efficitur nulla ornare sit amet. Phasellus a luctus turpis. Proin lobortis mattis mi ac sollicitudin. Integer ultrices eget neque et rhoncus. Quisque vitae ligula ut erat tempus interdum quis at elit. In hac habitasse platea dictumst. Morbi tortor tortor, ultrices ac auctor in, molestie interdum quam.

Aenean ullamcorper ac orci eu sollicitudin. Nunc vulputate ex ac est ullamcorper, porttitor blandit arcu pretium. Ut aliquam ante nibh. Ut sed lorem tristique, dapibus tortor dictum, volutpat nunc. Donec pellentesque, nibh consectetur luctus interdum, nibh urna auctor tellus, nec tempor elit tortor a risus. Cras sodales ante et nunc tristique, eget euismod massa placerat. Quisque ullamcorper ipsum et ex imperdiet lobortis. Aenean ultrices mattis sodales. Donec lacinia lobortis lorem, efficitur luctus nunc maximus sit amet. Integer malesuada a dui sit amet aliquet. Vivamus sit amet dignissim est. Morbi imperdiet vestibulum tempor. Mauris eu mollis nunc.

Fusce sed auctor massa, vel pharetra neque. Etiam posuere mattis ex in euismod. Aliquam erat volutpat. Aliquam eu ullamcorper enim. Donec vitae ipsum placerat, congue purus vitae, finibus metus. Phasellus pulvinar finibus luctus. Nunc semper, diam sed vehicula varius, leo ex euismod libero, eu vehicula libero nulla sit amet arcu. Sed vel finibus est, sed sodales ex. Aenean id augue mauris. Nam quis lacus nibh. Quisque sed diam eu eros porta egestas. Maecenas eu purus vel augue scelerisque luctus auctor a massa. Phasellus tempor, magna quis dictum porta, nunc risus maximus quam, id pulvinar turpis est vel massa. Phasellus sagittis at justo vitae faucibus. Aenean commodo ut ligula sed elementum. Vestibulum a tortor sed metus tempus consectetur id et mi.

Quisque vel tortor rutrum, condimentum nunc et, faucibus neque. Duis semper ac lorem blandit tempus. Praesent aliquet, lorem sit amet elementum tristique, odio mi suscipit nibh, vitae aliquet sem nibh id tellus. Aenean bibendum ligula nunc. Suspendisse imperdiet metus vel est ullamcorper efficitur. Suspendisse ut molestie nisi, ut congue ipsum. Morbi nulla metus, vehicula at nibh et, mollis dignissim ligula. Donec eget sodales eros. Donec rutrum porttitor bibendum. Sed facilisis eu urna at dignissim. Mauris ut nulla sed velit varius elementum in vel leo.

Nullam rhoncus luctus nisl non venenatis. Pellentesque sodales diam massa, eget bibendum purus egestas non. Vivamus condimentum dolor enim. Mauris porttitor lacus vitae ligula vehicula, id dignissim diam maximus. Vestibulum rhoncus orci sed dui euismod imperdiet. Mauris aliquet metus ipsum, quis vehicula sapien ullamcorper quis. Aliquam sit amet lectus convallis, tempor enim non, molestie lacus. Sed ac pretium nibh.
        </HomeLayout>
      </ErrorHandler>
    )
  }
}

export default App
