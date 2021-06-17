
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    
    children: [
      { path: '', component: () => import('pages/Home.vue'),
     
       }, { path: '/contactos', component: () => import('pages/PaginaUsuarios.vue'),
       meta: {
         autenticado: true
       }
        },
      
      { path: '/chat',
       component: () => import('pages/PaginaChat'),
       meta: {
        autenticado: true
      }
       
      },
      
      { path: '/login', component: () => import('pages/PaginaAutenticacion.vue'),   
     }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
