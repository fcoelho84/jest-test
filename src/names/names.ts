
export const getInitials = (name: string) => {
    if(!name) {
        throw new Error('O nome não pode ser nulo')
    }

    if(typeof name !== 'string') {
        throw new Error('Nome inválido')
    }

    if(!name.includes(' ')) return name[0]
    
    return name.split(' ').map(n => n.charAt(0).toUpperCase()).join('');
}
  