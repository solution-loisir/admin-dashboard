function RegistrationSkeleton() {
  return (
    <>
      <div class="loading-shimmer">
        <select>
          <option>-- Choisir la journée --</option>
        </select>
      </div>
      <nav class="flex-nav loading-shimmer">
        <ul role="list">
          <a>Liste des clients</a>
          <a>Liste des courriels</a>
        </ul>
      </nav>
      <div class="loading-shimmer height-full width-sm"></div>
    </>
  );
}

export default RegistrationSkeleton;