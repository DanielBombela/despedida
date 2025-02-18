import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { gsap } from 'gsap';

interface Reason {
  id: number;
  text: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="app-container">
      <h1 class="romantic-title">Carta a Jessica</h1>
      
      <!-- Video Section
        <div class="video-container">
        <video #videoPlayer controls [src]="videoUrl" 
               (loadedmetadata)="onVideoLoad()"
               class="w-full">
        </video>
      </div>
      
      -->
     

      <!-- 
           <div class="form-container">
        <textarea
          [(ngModel)]="newReason"
          placeholder="Escribe una nueva razón..."
          class="reason-input"
          rows="3"
        ></textarea>
        <button
          (click)="addReason()"
          [disabled]="reasons.length >= 101"
          class="add-button"
        >
          Añadir Razón
        </button>
      </div>

      -->
 
      <!-- Reasons List -->
      <div class="container">
        <div class="reason-card" >
          <p class="reason-text">
          Hoy te escribo estas palabras con el corazón abierto, no para pedirte que vuelvas, sino para agradecerte por todo lo que compartimos y por  lo que fuiste en mi vida.
Es difícil entender y comprender que no podemos obligar ni forzar a que una persona nos elija, discúlpame si llegaste a sentirte agobiada este tiempo, solo que soy un hombre que le gusta luchar y morirse en la linea por la persona que le importa, haber echo todo lo que ha estado en mis manos para que me eligieras
sin embargo entendí que esa decisión no me corresponde a mí, y que así como un día tu me elegiste y decidiste estar conmigo sin condiciones,
así tiene que pasar, talvez mi psicólogo y amigos tenían razón, si tu no me has buscado es porque no soy tu elección y no esta mal, 
quise aferrarme a la idea de un amor tan bonito y único que tuvimos que me fue difícil aceptar que todo acaba incluso ese amor que nos tuvimos, me dolió mucho la forma en que te fuiste, los planes, viajes, metas pendientes, sentí que pasaste de página mientras yo aún te esperaba, te extrañaba mucho y sí,  incluso me llegué a sentir remplazado, y sí, trate y sigo haciendo cosas por mi, solo que mi esperanza no me dejaba enfocarme 100% en mi porque esa esperanza me decía que aún me querías, que podía luchar por ti y
convencerte de lo increíble que soy, fue y es un proceso fuerte, donde solo había dos caminos, perderme o rencontrarme y agradezco porque sé que debo reconstruirme y ser una mejor versión mía, porque sí,  también te pido perdón por mis errores y fallas, por lo malo que yo te haya causado, perdón a tu familia y a la gente que te importa. No creo que nuestra relación fuera mala, al contrario me encantó compartir un tiempo de mi vida contigo, acepto que el alcohol llego influir en situaciones donde no fui yo, también opté por dejarlo y centrarme.
Todo este tiempo me he enfocado en lo que he echo mal y en como puedo ser mejor hombre, hijo, amigo, compañero, novio, persona, honestamente hubiese querido que esa versión se construyera contigo, sin embargo si la voluntad de Dios es que estemos juntos o volvamos a estarlo, seguramente te va tocar esa nueva versión, sin perder mi esencia.
Desde el día en que te conocí, supe que había encontrado a alguien especial. Gracias por abrirme las puertas de tu casa, gracias por alimentarme, procurarme y estar ahí cuando lo necesité. Contigo reí, soñé y aprendí. Me hiciste ver el amor desde una perspectiva diferente, me enseñaste a sentir de una manera especial. Y aunque el camino nos ha traído hasta este punto, donde nuestros destinos parecen tomar rumbos distintos, quiero que sepas que todo lo vivido ha valido la pena.
No puedo negar que me duele soltarte, pero te quiero tanto que prefiero hacerlo con amor. Me toca aceptar que hay batallas que no se ganan luchando, sino dejando ir. Me toca respetar tu camino, aunque no sea el mismo que el mío.
Me llevo conmigo los recuerdos de cada risa compartida, de cada conversación que nos hizo sentir en casa, de cada mirada que decía más que mil palabras. Me llevo lo mejor de nosotros, porque eso es lo que siempre quiero recordar y espero me recuerdes con amor.
Hoy te suelto con gratitud, con cariño y con la certeza de que, aunque las cosas no hayan salido como imaginé, el amor que te tuve fue genuino y real.
No, no te odio, ni te guardo rencor por nada, al contario te guardo en un lugar, en esos lugares del corazón donde se guarda a la gente que marca parte de tu vida.
Te deseo lo mejor, de corazón. Que encuentres la felicidad en cada paso que des, que el amor te abrace en cada forma, que la vida te lo presente, y que nunca olvides lo valiosa que eres, Que Dios restaure tu corazón, aclare tu mente, sane tus heridas y que nunca te conformes con menos de lo que mereces y si algún día sientes que puedes volver a enamorarte, enamórate de mí.

Gracias por haber sido parte de mi historia.

Con amor, tu ternurin. 

          </p>
        <div class="text-center">
        <img class="img-fluid" src="./assets/ternurines.png" alt="">
        </div>
          <div class="text-center">
          <br>
<span class="fw-bold">Atte: Daniel Bombela.
</span>
<br>
<span class="fw-bold">

Te amo.</span>
<br>
          </div>
        </div>
      </div>
    
    </div>

  `,
  styles: [`

  /* Aseguramos que el contenedor ocupe el 100% del ancho y mantenga una relación de aspecto */
.video-container {
  width: 100%;
  max-width: 100%; /* Para no exceder el tamaño de la pantalla */
  position: relative;
  padding-bottom: 56.25%; /* Relación de aspecto 16:9 */
  height: 0;
  overflow: hidden;
  background-color: black; /* Fondo negro mientras se carga el video */
}

/* Hacer que el video cubra el contenedor manteniendo la proporción */
.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Asegura que el video cubra todo el espacio sin distorsionarse */
}

/* Añadimos animación con gsap */
.video-container {
  transform: scale(1);
  opacity: 1;
  transition: transform 1s ease-out, opacity 1s ease-out; /* Transición para hacer que se vea más suave */
}

    .app-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #fff5f5 0%, #fff 100%);
      padding: 1rem;
      
  
    }

    .form-container {
      margin: 1.5rem auto;
      max-width: 600px;
      padding: 0 1rem;
    }

    .reason-input {
      width: 100%;
      padding: 1rem;
      border: 2px solid var(--primary-color);
      border-radius: 12px;
      font-size: 1rem;
      resize: vertical;
      margin-bottom: 1rem;
      font-family: 'Roboto', sans-serif;
      transition: border-color 0.3s ease;
    }

    .reason-input:focus {
      outline: none;
      border-color: var(--secondary-color);
      box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.2);
    }

    .add-button {
      width: 100%;
      padding: 1rem;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 1.1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .add-button:hover:not(:disabled) {
      background-color: #ff5252;
    }

    .add-button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .reasons-grid {
    
    }

    .reason-text {
      font-size: 1.1rem;
      line-height: 1.5;
      color: var(--text-color);
    }

    @media (max-width: 768px) {
      .app-container {
        padding: 0.5rem;
      }

      .form-container {
        padding: 0 0.5rem;
      }

      .reasons-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 0.5rem;
      }

      .reason-text {
        font-size: 1rem;
      }
    }
  `]
})
export class App implements OnInit {

  newReason: string = '';
  videoUrl: string = '';

  ngOnInit() {
    gsap.from('.romantic-title', {
      duration: 1.5,
      y: -50,
      opacity: 0,
      ease: 'back.out'
    });
  }



  createHeart(event: MouseEvent) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'heart-animation';
    heart.style.left = `${event.clientX}px`;
    heart.style.top = `${event.clientY}px`;
    document.body.appendChild(heart);

    gsap.to(heart, {
      duration: 1,
      y: -100,
      opacity: 0,
      onComplete: () => heart.remove()
    });
  }

  onVideoLoad() {
    gsap.from('.video-container', {
      duration: 1,
      scale: 0.8,
      opacity: 0,
      ease: 'power2.out'
    });
  }
}

bootstrapApplication(App);