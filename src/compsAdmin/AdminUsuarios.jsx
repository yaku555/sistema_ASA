import { useState, useEffect } from 'react';
import '../estilos/gestion.css';

const AdminUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    nombre: '',
    email: '',
    password: '',
    rol: 'usuario',
    estado: 'activo'
  });
  const [modo, setModo] = useState('crear');
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    const usuariosIniciales = [
      { id: 1, nombre: 'Administrador', email: 'admin@asa.com', rol: 'admin', estado: 'activo' },
      { id: 2, nombre: 'Usuario Test', email: 'usuario@asa.com', rol: 'usuario', estado: 'activo' }
    ];
    setUsuarios(usuariosIniciales);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const usuariosFiltrados = usuarios.filter(usuario => 
    usuario.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    usuario.email.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email) {
      alert('Por favor complete los campos requeridos');
      return;
    }

    if (modo === 'crear') {
      const nuevoUsuario = {
        ...formData,
        id: Date.now()
      };
      setUsuarios([...usuarios, nuevoUsuario]);
    } else {
      setUsuarios(usuarios.map(user => 
        user.id === formData.id ? formData : user
      ));
    }
    limpiarFormulario();
  };

  const editarUsuario = (usuario) => {
    setFormData({
      ...usuario,
      password: '' 
    });
    setModo('editar');
  };

  const eliminarUsuario = (id) => {
    if (window.confirm('¿Está seguro de eliminar este usuario?')) {
      setUsuarios(usuarios.filter(user => user.id !== id));
    }
  };

  const limpiarFormulario = () => {
    setFormData({
      id: '',
      nombre: '',
      email: '',
      password: '',
      rol: 'usuario',
      estado: 'activo'
    });
    setModo('crear');
  };

  return (
    <div className="admin-container">
      <h2>Administración de Usuarios</h2>
      
      <div className="busqueda-container">
        <input
          type="text"
          placeholder="Buscar usuarios..."
          value={busqueda}
          onChange={handleBusqueda}
          className="busqueda-input"
        />
      </div>

      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="nombre">Nombre completo *</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo electrónico *</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">
            Contraseña {modo === 'crear' ? '*' : '(dejar en blanco para mantener)'}
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required={modo === 'crear'}
          />
        </div>

        <div className="form-group">
          <label htmlFor="rol">Rol</label>
          <select id="rol" name="rol" value={formData.rol} onChange={handleInputChange}>
            <option value="usuario">Usuario</option>
            <option value="admin">Administrador</option>
            <option value="supervisor">Supervisor</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="estado">Estado</label>
          <select id="estado" name="estado" value={formData.estado} onChange={handleInputChange}>
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
            <option value="suspendido">Suspendido</option>
          </select>
        </div>

        <div className="botones-container">
          <button type="submit" className="btn-principal">
            {modo === 'crear' ? 'Crear Usuario' : 'Actualizar Usuario'}
          </button>
          
          {modo === 'editar' && (
            <button type="button" onClick={limpiarFormulario} className="btn-secundario">
              Cancelar
            </button>
          )}
        </div>
      </form>

      <div className="tabla-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados.map(usuario => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.email}</td>
                <td>{usuario.rol}</td>
                <td>
                  <span className={`estado-badge ${usuario.estado}`}>
                    {usuario.estado}
                  </span>
                </td>
                <td className="acciones">
                  <button 
                    onClick={() => editarUsuario(usuario)}
                    className="btn-editar"
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => eliminarUsuario(usuario.id)}
                    className="btn-eliminar"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsuarios;