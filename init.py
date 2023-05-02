import schedule
import time
from selenium import webdriver
from datetime import datetime
from selenium.webdriver.common.by import By

valor = input("Escreva o valor para a consulta: ")
print(f"A cada 10 minutos a execucao sera realizada para: {valor}")



def search_google():
    driver = webdriver.Chrome()
    driver.get("https://www.google.com")
    campo_pesquisa = driver.find_element(By.NAME,"q")
    campo_pesquisa.send_keys(valor)
    campo_pesquisa.submit()
    time.sleep(5)
    driver.quit()
    print("Completed. Next: 10 min")

search_google()

schedule.every(10).minutes.do(search_google)

while True:
    schedule.run_pending()
    #next_run = schedule.next_run()
    #time_diff = next_run - datetime.now()
    #formatted_time_diff = time_diff.strftime('%H:%M:%S')
    #print("Completed. Next:", formatted_time_diff)
    time.sleep(1)   

