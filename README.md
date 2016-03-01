## think-template-twig

Twig template adapter for ThinkJS

### Install

  npm install think-template-twig

### How to use

#### register adapter

  import TwigAdapter from 'think-template-twig';
  think.adapter('template', 'twig', TwigAdapter);

add above code in bootstrap file, like `src/common/bootstrap/adapter.js`.

#### change view type

change view type in file `src/common/config/view.js`:

  export default {
    type: 'twig',
    adapter: {
      twig: { //twig options
        //set prerender function if you want extend your twig template
        prerender(Twig, templateFile) {
          Twig.extendFunction('repeat', (value, times) => return new Array(times+1).join(value));
        }
      }
    }
  }
