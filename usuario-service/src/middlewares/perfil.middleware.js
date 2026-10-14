function autorizarPerfis(...perfisPermitidos) {
    return (req, res, next) => {
        const perfilUsuario = req.headers['x-perfil'] || req.body.perfilSolicitante;

        if (!perfilUsuario) {
            return res.status(401).json({
                mensagem: 'Perfil de acesso não informado no cabeçalho (x-perfil).'
            });
        }

        if (!perfisPermitidos.includes(perfilUsuario)) {
            return res.status(403).json({
                mensagem: `Acesso negado. O perfil ${perfilUsuario} não possui permissão para esta ação.`
            });
        }

        next();
    };
}

module.exports = {
    autorizarPerfis
};