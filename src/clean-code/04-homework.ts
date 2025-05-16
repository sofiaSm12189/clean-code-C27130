(() => {


    // se simplifico usando constantes
    function isRedFruit( fruitNames: string ): boolean {
        const redFruits = ['manzana', 'cereza', 'ciruela'];
        return redFruits.includes(fruitNames);
    }

    //se simplifico con Record
    function getFruitsByColor( color: string ): string[] {

        const fruitsByColor: Record<string, string[]> = {
            red: ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas']
          };
        
          if (!(color in fruitsByColor)) {
            throw new Error('The color must be: red, yellow, purple');
          }
        
          return fruitsByColor[color];
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        if (!isFirstStepWorking) return 'Second step broken.';
        if (!isSecondStepWorking) return 'Second step broken.';
        if (!isThirdStepWorking) return 'Third step broken.';
        if (!isFourthStepWorking) return 'Fourth step broken.';

        return 'Working properly!';
        
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();