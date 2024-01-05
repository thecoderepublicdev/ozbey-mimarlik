<form className={ElementClassList.Form}>
    <div className={ElementClassList.FormGroup}>
        <label htmlFor="full-name" className={ElementClassList.FormLabel}>Ad Soyad</label>
        <input name="full-name" id="full-name" required placeholder="Ad Soyad" className={ElementClassList.FormInput} />
    </div>
    <div className={ElementClassList.FormGroup}>
        <label htmlFor="phone" className={ElementClassList.FormLabel}>Telefon</label>
        <input name="phone" id="phone" type="tel" required placeholder="Telefon" className={ElementClassList.FormInput} />
    </div>
    <div className={ElementClassList.FormGroup}>
        <label htmlFor="email" className={ElementClassList.FormLabel}>E-Posta</label>
        <input name="email" id="email" type="email" required placeholder="E-Posta" className={ElementClassList.FormInput} />
    </div>
    <div className={ElementClassList.FormGroup}>
        <label htmlFor="subject" className={ElementClassList.FormLabel}>Konu</label>
        <input name="subject" id="subject" required placeholder="Konu" className={ElementClassList.FormInput} />
    </div>
    <div className={ElementClassList.TextareaFormGroup}>
        <label htmlFor="message" className={ElementClassList.FormLabel}>Mesaj</label>
        <textarea name="message" id="message" required placeholder="Mesaj" className={ElementClassList.FormTextarea}></textarea>
    </div>
    <div>
        <button type="submit" className={ElementClassList.Button}>Gönder</button>
    </div>
</form>