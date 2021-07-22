import xmltodict
import json, requests
from time import sleep

def forvolta(volta):
    removed = volta.replace(":",".")
    removed2 = removed.replace("."," ")
    form = removed2[1:9]
    return form

def fortitulo(titulo):
    removed = titulo.replace("<br>"," ")
    return removed

def fortempcorrida(tempocorrida):
    removed = tempocorrida.replace(":"," minutos e ")
    form = removed[13:28]
    result = form+" segundos"
    return result

while True:
    with open('livetimemarcou.xml', 'r') as myfile:
        #obj = xmltodict.parse(myfile.read())
        objj = xmltodict.parse(myfile.read())

    y = json.dumps(objj)
    r = json.loads(y)

    npiloto = r['KARTODROMOS']['PROVA']['POSICOES']
   
    print(len(npiloto))

    for i in range(len(npiloto)):
        nom = r['KARTODROMOS']['PROVA']['POSICOES'][i]['NOME']
        nome = nom.lower()
        numero_volta = r['KARTODROMOS']['PROVA']['POSICOES'][i]['MELHOR_VOLTA']
        ultima_volta = r['KARTODROMOS']['PROVA']['POSICOES'][i]['TEMPO_VOLTA']
        melhor_volta = r['KARTODROMOS']['PROVA']['POSICOES'][i]['TEMPO_MELHOR_VOLTA']
        format_melhor_volta = forvolta(r['KARTODROMOS']['PROVA']['POSICOES'][i]['TEMPO_MELHOR_VOLTA'])
        tempo_corrida = fortempcorrida(r['KARTODROMOS']['PROVA']['@TEMPOCORRIDA'])
        data = r['KARTODROMOS']['PROVA']['@DATA']
        titulo = fortitulo(r['KARTODROMOS']['PROVA']['@TITULO'])

        if(data != 'PROVA ENCERRADA'):
            data = '0'

        payload = {'nome': nome, 'numero_volta': numero_volta, 'ultima_volta': ultima_volta, 'melhor_volta': melhor_volta, 'format_melhor_volta': format_melhor_volta, 'tempo_corrida': tempo_corrida, 'data': data, 'titulo': titulo}

        try:
            rq = requests.put('http://dracom-krt.com.br/volta/nome/'+nome , json=payload)
            print(nome+": ATUALIZADO NO BANCO.")
            print(titulo)
        
            if (rq.text == 'null'):
                rx = requests.post('http://dracom-krt.com.br/volta', json=payload)
                print(nome+": CRIADO NOVO REGISTRO")  

        except requests.ConnectionError as e:
            print("OOPS!! FALHA DE CONEXAO.\n")
        #print(i,'-',r['KARTODROMOS']['PROVA']['POSICOES'][i]['NOME'],'volta: ',r['KARTODROMOS']['PROVA']['POSICOES'][i]['TEMPO_MELHOR_VOLTA'])
        
    sleep(30)
