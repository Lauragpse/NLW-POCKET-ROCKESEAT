const { select, input } = require('@inquirer/prompts')

const cadastarMeta = async () => {
    const meta = await input({ message: 'Digite a meta: ' })

    if (meta.length == 0) {
        console.log('A meta não pode ser vazia')
        return
    }
}

const start = async () => {
    while (true) {
        const opcao = await select({
            message: 'Menu >',
            choices: [
                {
                    name: 'cadastrar meta',
                    value: 'cadastrar'
                },
                {
                    name: 'Listar metas',
                    value: 'listar'
                },
                {
                    name: 'Sair',
                    value: 'sair'
                }
            ]
        })

        switch (opcao) {
            case 'cadastrar':
                await cadastarMeta()
                break
            case 'listar':
                console.log('Vamos listar')
                break
            case 'sair':
                console.log('Até a próxima')
                return
        }

    }
}

start()