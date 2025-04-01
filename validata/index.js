class Validate {
    // 校验数据是否是undefined
    async undefinedCheck(val, per) {
        if (val === undefined) {
            throw { msg: `${per}字段必填`, code: 400, validate: null };
        }
    };
    // 空值和字符串校验
    async nullCheck(val, tips, par) {
        await undefinedCheck(val, par);
        if (val.trim === '') {
            throw { msg: tips, code: 422, validate: null };
        }
        if (typeof val !== 'string') {
            throw { msg: `${par}字段必须是字符串类型`, code: 400, validate: null };
        }
    };
    // 校验数组类型
    async arrayCheck(val, tips, par) {
        await undefinedCheck(val, par);
        if (!Array.isArray(val)) {
            throw { msg: `${par}字段必须是数组类型`, code: 400, validate: null };
        }
        if (val.length <= 0) {
            throw { msg: tips, code: 422, validate: null };
        }
    };
}

module.exports = new Validate();