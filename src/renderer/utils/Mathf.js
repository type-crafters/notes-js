export const Mathf = {
    ...Math,
    /**
     * @param {number} value 
     * @param {number} min 
     * @param {number} max 
     * @returns {number}
     */
    clamp: (
        value,
        min = Number.MIN_SAFE_INTEGER,
        max=Number.MAX_SAFE_INTEGER
    ) => Math.max(Math.min(value, max), min)
}