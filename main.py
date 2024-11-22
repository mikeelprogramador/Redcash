import eel
import os

# Inicializa Eel, indicando la carpeta donde están los archivos web
eel.init('app')

@eel.expose
def cargar_contenido(ruta):
    archivo_contenido = 'app/view/'+ ruta
    if os.path.exists(archivo_contenido):
        with open(archivo_contenido, 'r', encoding='utf-8') as f:
            return f.read()
    else:
        print(f"Error: No se encontró el archivo {archivo_contenido}")
        return "<p>No se pudo cargar el contenido.</p>"

# Ejecutar la interfaz web de Eel
eel.start('index.html', size=(800, 600))

