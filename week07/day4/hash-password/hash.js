import bcrypt from 'bcrypt'

export function hashMyPassword(password) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export function comparePassword(password, hash) {
    const result = bcrypt.compareSync(password, hash);
    return result
}
