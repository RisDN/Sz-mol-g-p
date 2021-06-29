import eel

class Main:
    @eel.expose
    def kiszamitas(x):
        try:
            eredmeny = eval(x)
            print("Megadott számok: " + x)
            eel.eredmeny_megjelenites(eredmeny)
        except:
            eel.hibas_egyenlet()
if __name__ == '__main__':
    serverAddress = '127.0.0.1'
    serverPort = 2550
    
    eel.init('web')
    eel.start('index.html')
