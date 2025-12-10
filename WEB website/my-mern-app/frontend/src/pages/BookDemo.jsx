import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import CategorySidebar from '../components/CategorySidebar';
import api from '../api';

const CATEGORIES = ['Articulate Content Development','Video Based Learning','Animation Service','IT & Consulting'];

export default function BookDemo(){
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || CATEGORIES[0];
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [form, setForm] = useState({
    firstName:'', lastName:'', phone:'', email:'', jobTitle:'', companyName:'', companyWebsite:'', city:'', preferredSolution:'', message:'', consent:false
  });
  const [errors, setErrors] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  useEffect(()=> {
    // keep URL in sync when selectedCategory changes
    const url = new URL(window.location);
    url.searchParams.set('category', selectedCategory);
    window.history.replaceState({}, '', url);
  }, [selectedCategory]);

  function handleChange(e){
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }

  async function handleSubmit(e){
    e.preventDefault();
    setErrors(null);
    setSuccess(null);

    
    if (!form.email && !form.phone) {
      setErrors('Provide email or phone');
      return;
    }

    try {
      const payload = { ...form, category: selectedCategory };
      const res = await api.post('/demos', payload);
      setSuccess('Saved — thank you! 🎉');
      setForm({
        firstName:'', lastName:'', phone:'', email:'', jobTitle:'', companyName:'', companyWebsite:'', city:'', preferredSolution:'', message:'', consent:false
      });
      
    } catch (err) {
      console.error(err);
      setErrors(err.response?.data?.error || 'Submit failed');
    }
  }

  return (
    <div style={{ display: 'flex', padding: 36 }}>
      <CategorySidebar
        categories={CATEGORIES}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div style={{ flex: 1, maxWidth: 900 }}>
        <h2>{selectedCategory}</h2>

        <form onSubmit={handleSubmit}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 20  }}>
            <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} />
            <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} />
            <div style={{ display:'flex' }}>
              <select style={{ width: 90 }}>
                <option>+91</option>
                <option>+1</option>
              </select>
              <input name="phone" placeholder="Phone No" value={form.phone} onChange={handleChange} style={{ flex:1 }} />
            </div>
            <input name="email" placeholder="Business Email" value={form.email} onChange={handleChange} />
            <input name="jobTitle" placeholder="Job Title" value={form.jobTitle} onChange={handleChange} />
            <input name="companyName" placeholder="Company Name" value={form.companyName} onChange={handleChange} />
            <input name="companyWebsite" placeholder="Company Website" value={form.companyWebsite} onChange={handleChange} />
            <input name="city" placeholder="City" value={form.city} onChange={handleChange} />
            <select name="preferredSolution" value={form.preferredSolution} onChange={handleChange}>
              <option value="">Preferred solutions</option>
              <option value="solution-1">Solution 1</option>
              <option value="solution-2">Solution 2</option>
            </select>
            <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} rows={6} style={{ gridColumn: '1 / -1' }} />
            <label style={{ gridColumn: '1 / -1' }}>
              <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} /> By submitting this form, I consent...
            </label>
          </div>

          {errors && <div style={{ color: 'crimson', marginTop: 12 }}>{errors}</div>}
          {success && <div style={{ color: 'green', marginTop: 12 }}>{success}</div>}

          <div style={{ marginTop: 18 }}>
            <button type="submit" style={{ padding: '12px 22px', background: 'linear-gradient(90deg,#0066FF,#00D4FF)', color: '#f5f0f0ff', border: 0 }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
