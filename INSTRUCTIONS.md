# Dinámica del Proyecto – Zalits Proton 01

Este documento explica la dinámica del proyecto para que todos los participantes trabajemos de forma organizada y colaborativa durante las próximas semanas.

---

## Estructura del repositorio

El repositorio principal será **`zalits-proton-01`**, donde **yo llevaré los cambios directamente sobre la rama `master`**.

Cada alumno tendrá su propia carpeta dentro de `/src/features` con el siguiente formato:

```
/src/features/nombre-clave-del-alumno
```

Cada quien podrá elegir el nombre de su carpeta como prefiera.
Por ejemplo, **mi carpeta se llamará `nucleus`**.

Todos trabajarán sobre los mismos requerimientos, pero cada quien mantendrá su versión individual dentro de su carpeta.

---

## Carpetas y módulos compartidos

Podremos tener carpetas públicas o compartidas (por ejemplo: `/shared`, `/components`, `/utils`, etc.).
Si alguien encuentra una mejora, corrección o forma más eficiente de resolver algo, podrá hacerlo mediante un **Pull Request (PR)** hacia `master`.

De esta manera, todos podrán beneficiarse de las mejoras sin afectar el trabajo individual.

---

## Ramas y flujo de trabajo

Es posible tener más de una rama activa al mismo tiempo, dependiendo de lo que estés desarrollando.
Ejemplos de nombres de ramas:

```
/features/cxrom/release-01
/features/cxrom/add-super-new-way-to-use-this-hook
/bug/cxrom/fix-routes-error
/hotfix/cxrom/critical-security-patch
```

Se recomienda usar prefijos como:

- `feature/` → para nuevas funcionalidades
- `bug/` → para correcciones de errores
- `hotfix/` → para parches urgentes
- `refactor/` → para mejoras o reestructuración del código

Cada rama debe incluir el **nombre clave del alumno** y una breve descripción del propósito.

### ⚠️ Importante: Proceso para Bugs y Hotfixes

**Todas las correcciones que no sean features (bugs, hotfixes, etc.) deben seguir este proceso obligatorio:**

1. **Crear un Issue en GitHub** antes de comenzar cualquier trabajo:
   - Ir a la sección "Issues" del repositorio en GitHub
   - Crear un nuevo issue describiendo el problema
   - Usar las etiquetas apropiadas: `bug`, `hotfix`, `critical`, etc.
   - Asignar el issue a la persona que lo resolverá

2. **Referenciar el Issue en la rama:**

   ```
   /bug/cxrom/fix-routes-error-#15
   /hotfix/maria/critical-security-patch-#23
   ```

3. **Referenciar el Issue en commits:**

   ```bash
   git commit -m "fix: resolve routing error in navigation component (closes #15)"
   git commit -m "hotfix: patch security vulnerability in auth module (fixes #23)"
   ```

4. **El Pull Request debe mencionar el Issue:**
   - Incluir "Closes #15" o "Fixes #23" en la descripción del PR
   - Esto automáticamente cerrará el issue cuando se mergee el PR

**Ejemplo de flujo completo:**

1. Detectar bug → Crear Issue #15 en GitHub
2. Crear rama: `bug/cxrom/fix-routes-error-#15`
3. Hacer commits: `"fix: resolve navigation bug (closes #15)"`
4. Crear PR mencionando: "This PR fixes #15"
5. Mergear PR → Issue se cierra automáticamente

---

## Dinámica semanal

Cada **viernes** se enviará el nuevo requerimiento que deberán trabajar durante la semana.
El **siguiente viernes** tendremos una **llamada de seguimiento**, donde:

- Yo presentaré mis cambios y mi implementación de referencia.
- Quienes ya hayan terminado podrán revisar mi rama para comparar enfoques y aprender nuevas formas de resolverlo.
- Quienes no lo hayan completado podrán usar mi versión como guía o referencia para finalizar su tarea.

---

## Resumen

- Repositorio principal: `zalits-proton-01`
- Cada alumno trabaja en: `/src/features/nombre-clave`
- Se pueden crear PRs en carpetas compartidas
- Se permite tener varias ramas activas
- Requerimientos nuevos: cada viernes
- Revisión y guía: cada viernes siguiente
